(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# gulp-filter-java-properties
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> filter-java-properties plugin for [gulp](https://github.com/wearefractal/gulp)

Gulp wrapper for the [filter-java-properties](https://github.com/samolsen/node-filter-java-properties) plugin. Performs key-value string replacement, similar to the Maven Resources plugin.

## Usage

First, install `gulp-filter-java-properties` as a development dependency:

```shell
npm install --save-dev gulp-filter-java-properties
```

Then, add it to your `gulpfile.js`:

```javascript
var filter-java-properties = require("gulp-filter-java-properties");

gulp.src("./src/*.ext")
	.pipe(filter-java-properties({
		propertiesPath: path.resolve(__dirname, "configure.properties"),
    delimiters: ["${*}", "@"] // optional, defaults shown
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### filter-java-properties(options)

#### options.propertiesPath
Type: `String`  
*Required*

Absolute path to a .properties file. For relative paths, using `path.resolve` is recommended.

#### options.delimiters
Type: `String`  
Default: `["${*}", "@"]

Delimiters to use for string filtering. (More info)[https://github.com/samolsen/node-filter-java-properties/blob/master/docs/javascript-api.md#filter-delimiters].



## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-filter-java-properties
[npm-image]: https://badge.fury.io/js/gulp-filter-java-properties.png

[travis-url]: http://travis-ci.org/samolsen/gulp-filter-java-properties
[travis-image]: https://secure.travis-ci.org/samolsen/gulp-filter-java-properties.png?branch=master

[coveralls-url]: https://coveralls.io/r/samolsen/gulp-filter-java-properties
[coveralls-image]: https://coveralls.io/repos/samolsen/gulp-filter-java-properties/badge.png

[depstat-url]: https://david-dm.org/samolsen/gulp-filter-java-properties
[depstat-image]: https://david-dm.org/samolsen/gulp-filter-java-properties.png
