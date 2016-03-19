# gulp-cordova-build-ios

> Build the cordova project for the iOS platform.


## Installation

```
npm install --save-dev gulp-cordova-build-ios
```


## Usage

```js
const gulp = require('gulp');
const create = require('gulp-cordova-create');
const plugin = require('gulp-cordova-plugin');
const ios = require('gulp-cordova-build-ios');

gulp.task('build', () => {
    return gulp.src('www')
        .pipe(create())
        .pipe(plugin('org.apache.cordova.dialogs'))
        .pipe(plugin('org.apache.cordova.camera'))
        .pipe(ios());
});
```

This plugin will build the cordova project for the iOS platform.

### Optional parameters
The ```ios(options)``` method accepts some optional parameters. The `options` parameter is an object with value of:

* `reAdd` (boolean), this will cause the ios platform to be removed and re-added. 
* `version` (string), this will force the cordova to get the specified platform version of ios platform support.

For backward compatibility, it accepts the parameter with the following format:

```
ios(reAdd, version)
```

If the first parameter passed in is a boolean with value of ```true```, it will first remove the entire iOS platform and add it again. The second parameter is the requested version of the platform. 

```js
const gulp = require('gulp');
const ios = require('gulp-cordova-build-ios');

gulp.task('rebuild', () => {
    return gulp.src('.cordova')
        .pipe(ios(true));
});
```

This task will simply remove the iOS platform, add it again and rebuild it.

```
$ cordova platform remove ios
$ cordova platform add ios
$ cordova build ios
```

If no parameter is provided, it will only build the platform.


## Related

See [`gulp-cordova`](https://github.com/SamVerschueren/gulp-cordova) for the full list of available packages.


## License

MIT © Sam Verschueren
