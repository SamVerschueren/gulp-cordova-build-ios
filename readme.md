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
        .pipe(ios())
        .pipe('ios');
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

##### version

Type: `string`

iOS platform version.

##### device

Type: `boolean`<br>
Default: `true`

If the value is `true`, this will build .ipa file as result. 

**You must provide build.json file in cordova project directory**

```json
{
  "ios": {
    "debug": {
      "codeSignIdentitiy": "iPhone Developer",
      "provisioningProfile": "your-dev-provisioning-profile-UUID-here"
    },
    "release": {
      "codeSignIdentitiy": "iPhone Distribution",
      "provisioningProfile": "your-distribution-provisioning-profile-UUID-her"
    }
  }
}
```
To get UUID execute in terminal - `/usr/libexec/PlistBuddy -c "Print UUID" /dev/stdin <<< $(security cms -D -i /path/to/file.mobileprovision)` or
open the .mobileprovision file on a text editor and search for 'UUID'.

##### release

Type: `boolean`<br>
Default: `false`

If the value is `true`, this will build .ipa and sign it with release certificates

## Related

See [`gulp-cordova`](https://github.com/SamVerschueren/gulp-cordova) for the full list of available packages.


## License

MIT © Sam Verschueren
