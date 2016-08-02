# gulp-cordova-build-ios

> Build the cordova project for the iOS platform.


## Installation

```
$ npm install --save-dev gulp-cordova-build-ios
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

### ios([options])

#### options

##### reAdd

Type: `boolean`<br>
Default: `false`

If the value is `true`, this will cause the ios platform to be removed and re-added.

#### version

Type: `string`

iOS platform version.


## Related

See [`gulp-cordova`](https://github.com/SamVerschueren/gulp-cordova) for the full list of available packages.


## License

MIT © Sam Verschueren
