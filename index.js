'use strict';
var path = require('path');
var fs = require('fs');
var through = require('through2');
var gutil = require('gulp-util');
var Promise = require('pinkie-promise');
var cordovaLib = require('cordova-lib').cordova;

var cordova = cordovaLib.raw;

module.exports = function (options) {
	options = options || {};
	var device = options.device || true;
	var release = options.release || false;

	return through.obj(function (file, enc, cb) {
		// Change the working directory
		process.env.PWD = file.path;

		// Pipe the file to the next step
		this.push(file);

		cb();
	}, function (cb) {
		var self = this;
		var iosPath = path.join(cordovaLib.findProjectRoot(), 'platforms', 'ios');
		var exists = fs.existsSync(iosPath);

		Promise.resolve()
			.then(function () {
				if (options.reAdd) {
					// First remove the platform if we have to re-add it
					return cordova.platforms('rm', 'ios');
				}
			})
			.then(function () {
				if (exists === false || options.reAdd) {
					// Add the iOS platform if it does not exist or we have to re-add it
					return cordova.platforms('add', 'ios' + (options.version ? ('@' + options.version) : ''));
				}
			})
			.then(function () {
				var options = [];

				if (device) {
					options.push('--device');
				}
				if (release) {
					options.push('--release');
				}

				// Build the platform
				return cordova.build({platforms: ['ios'], options: options});
			})
			.then(function () {
				var base = path.join(iosPath, 'build/device');
				var cwd = process.env.PWD;

				// Iterate over the output directory
				fs.readdirSync(base).forEach(function (file) {
					if (file.indexOf('.ipa') !== -1) {
						var filePath = path.join(base, file);

						// Push the file to the result set
						self.push(new gutil.File({
							base: base,
							cwd: cwd,
							path: filePath,
							contents: fs.readFileSync(path.join(base, file))
						}));
					}
				});

				cb();
			})
			.catch(function (err) {
				// Return an error if something happened
				cb(new gutil.PluginError('gulp-cordova-build-ios', err.message));
			});
	});
};
