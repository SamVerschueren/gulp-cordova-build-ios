# gulp-cordova-build-ios

> Build the cordova project for the iOS platform.

## Installation

```bash
npm install --save-dev gulp-cordova-build-ios
```

**not yet available**

## Usage

```JavaScript
var gulp = require('gulp'),
    create = require('gulp-cordova-create'),
    plugin = require('gulp-cordova-plugin'),
    ios = require('gulp-cordova-build-ios');

gulp.task('build', function() {
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

```JavaScript
var gulp = require('gulp'),
    ios = require('gulp-cordova-build-ios');

gulp.task('rebuild', function() {
    return gulp.src('.cordova')
        .pipe(ios(true));
});
```

This task will simply remove the iOS platform, add it again and rebuild it.

```bash
$ cordova platform remove ios
$ cordova platform add ios
$ cordova build ios
```

If no parameter is provided, it will only build the platform.

## Related

See [`gulp-cordova`](https://github.com/SamVerschueren/gulp-cordova) for the full list of available packages.

## Contributors

- Sam Verschueren [<sam.verschueren@gmail.com>]

## License

MIT © Sam Verschueren
