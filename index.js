'use strict';
const path = require('path');
const fs = require('fs');
const through = require('through2');
const gutil = require('gulp-util');
const Promise = require('pinkie-promise');
const {cordova} = require('cordova-lib');

module.exports = options => {
	options = options || {};

	return through.obj((file, enc, cb) => {
		// Change the working directory
		process.env.PWD = file.path;

		// Pipe the file to the next step
		cb(null, file);
	}, cb => {
		const exists = fs.existsSync(path.join(cordova.findProjectRoot(), 'platforms', 'ios'));

		Promise.resolve()
			.then(() => {
				if (options.reAdd) {
					// First remove the platform if we have to re-add it
					return cordova.platforms('rm', 'ios');
				}
			})
			.then(() => {
				if (exists === false || options.reAdd) {
					// Add the iOS platform if it does not exist or we have to re-add it
					return cordova.platforms('add', 'ios' + (options.version ? ('@' + options.version) : ''));
				}
			})
			.then(() => cordova.build({platforms: ['ios']}))
			.then(() => cb())
			.catch(error => {
				// Return an error if something happened
				cb(new gutil.PluginError('gulp-cordova-build-ios', error.message));
			});
	});
};
