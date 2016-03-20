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

## API
### ios(options)
#### options

*Optional*

Type: `object`

A key-value pair object where the key is the name of the preference and the value the value. The keys and types are described below.

##### options.reAdd 

*Optional*

Type: `boolean`

If the value is `true`, this will cause the ios platform to be removed and re-added. 

#### options.version

*Optional*

Type: `string`

This will force the cordova to get the specified platform version of ios platform support.

## Example

```js
const gulp = require('gulp');
const ios = require('gulp-cordova-build-ios');

gulp.task('rebuild', () => {
    return gulp.src('.cordova')
        .pipe(ios({ version: '3.9.2' }));
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
