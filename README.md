# gulp-filter-java-properties
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> [gulp](https://github.com/wearefractal/gulp) wrapper for the [filter-java-properties](https://github.com/samolsen/node-filter-java-properties) Node package. Performs key-value string replacement, similar to the Maven Resources plugin.

## Usage

First, install `gulp-filter-java-properties` as a development dependency:

```shell
npm install --save-dev gulp-filter-java-properties
```

Then, add it to your `gulpfile.js`:

```javascript
var filterProperties = require("gulp-filter-java-properties");

gulp.src("./src/*.ext")
	.pipe(filterProperties({
      propertiesPath: "configure.properties",
      delimiters: ["${*}", "@"] // optional, defaults shown
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### filter-java-properties(options)

#### options.propertiesPath
Type: `String`  
*Required*

Path to a **.properties** file. Path should be absolute, or relative to `process.cwd()`.

#### options.delimiters
Type: `String`  
Default: `["${*}", "@"]`

Delimiters to use for string filtering. [More info](https://github.com/samolsen/node-filter-java-properties/blob/master/docs/javascript-api.md#filter-delimiters).



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
