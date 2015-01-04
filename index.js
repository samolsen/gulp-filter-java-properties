var through = require("through2"),
	gutil = require("gulp-util"),
	fs = require("fs");

var PropertyFilter = require('filter-java-properties').PropertyFilter;

module.exports = function (opts) {
	"use strict";

	// if necessary check for required opts(s), e.g. options hash, etc.
	if (!opts) {
		throw new gutil.PluginError("gulp-filter-java-properties", "No opts supplied");
	}
	if (!opts.propertiesPath) {
		throw new gutil.PluginError("gulp-filter-java-properties", "A .properties file is required");	
	}

	// see "Writing a plugin"
	// https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md
	function filterJavaProperties(file, enc, callback) {
		/*jshint validthis:true*/

		// Do nothing if no contents
		if (file.isNull()) {
			this.push(file);
			return callback();
		}

		var _this = this;

		var propertiesFileStream = fs.createReadStream(opts.propertiesPath);

		PropertyFilter.withStream({
			inStream: propertiesFileStream,
			delimiters: opts.delimiters,
			done: function (err, filter) {
				if (err) {
					_this.emit(err);
					return callback();
				}

				// Handle buffer
				if (file.isBuffer()) {
					var contents = String(file.contents),
						filtered = filter.filterString(contents);
					file.contents = new Buffer(filtered);
					
					_this.push(file);
					return callback();
				}

				// Handle stream
				if (file.isStream()) {
					var inStream = file.contents, 
						outStream = through();

					filter
						.filterStream(inStream)
						.pipe(outStream);

					inStream
						.on('end', function () {
							file.contents = outStream;
							_this.push(file);
							callback();
						})
						.on('error', function (e) {
							_this.emit(err);
							callback();
						});

					return;
				}	

				return callback();
			}
		});
		
	}

	return through.obj(filterJavaProperties);
};
