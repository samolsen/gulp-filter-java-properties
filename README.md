(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# gulp-filter-java-properties
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> filter-java-properties plugin for [gulp](https://github.com/wearefractal/gulp)

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
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### filter-java-properties(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


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
