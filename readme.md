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

### Re-adding the iOS platform

The ```ios()``` method accepts one optional parameter. If the parameter passed in is ```true```, it will first
remove the entire iOS platform and add it again.

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
