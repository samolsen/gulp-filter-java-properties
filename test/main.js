/*global describe, it*/
"use strict";

var fs = require("fs"),
	es = require("event-stream"),
	should = require("should"),
	gutil = require("gulp-util"),
	path = require("path");

require("mocha");

delete require.cache[require.resolve("../")];

var gutil = require("gulp-util"),
	filterJavaProperties = require("../");

describe("gulp-filter-java-properties", function () {

	it("should error if propertiesPath option is provided", function () {
		should(function () {
			filterJavaProperties({});
		}).throw()
	});

	describe('default delimiters', function() {
		

		var expectedFile = new gutil.File({
			path: "test/expected/default-delimiters.txt",
			cwd: "test/",
			base: "test/expected",
			contents: fs.readFileSync("test/expected/default-delimiters.txt")
		});

		var stream;
		beforeEach(function () {
			stream = filterJavaProperties({propertiesPath: "test/fixtures/configure.properties"});
		});

		it("should produce expected file via buffer", function (done) {

			var srcFile = new gutil.File({
				path: "test/fixtures/template.txt",
				cwd: "test/",
				base: "test/fixtures",
				contents: fs.readFileSync("test/fixtures/template.txt")
			});	

			stream.on("error", function(err) {
				should.exist(err);
				done(err);
			});

			stream.on("data", function (newFile) {

				should.exist(newFile);
				should.exist(newFile.contents);

				String(newFile.contents).should.equal(String(expectedFile.contents));
				done();
			});

			stream.write(srcFile);
			stream.end();
		});

		it("should produce expected file via stream", function (done) {

			var srcFile = new gutil.File({
				path: "test/fixtures/template.txt",
				cwd: "test/",
				base: "test/fixtures",
				contents: fs.createReadStream("test/fixtures/template.txt")
			});

			stream.on("error", function(err) {
				should.exist(err);
				done();
			});

			stream.on("data", function (newFile) {

				should.exist(newFile);
				should.exist(newFile.contents);

				newFile.contents.pipe(es.wait(function(err, data) {
					should.not.exist(err);
					String(data).should.equal(String(expectedFile.contents));
					done();
				}));
			});

			stream.write(srcFile);
			stream.end();
		});
	});	

	describe('custom delimiters', function() {
		

		var expectedFile = new gutil.File({
			path: "test/expected/custom-delimiters.txt",
			cwd: "test/",
			base: "test/expected",
			contents: fs.readFileSync("test/expected/custom-delimiters.txt")
		});

		var stream;
		beforeEach(function () {
			stream = filterJavaProperties({
				propertiesPath: "test/fixtures/configure.properties",
				delimiters: '(*)'
			});
		});

		it("should produce expected file via buffer", function (done) {

			var srcFile = new gutil.File({
				path: "test/fixtures/template.txt",
				cwd: "test/",
				base: "test/fixtures",
				contents: fs.readFileSync("test/fixtures/template.txt")
			});	

			stream.on("error", function(err) {
				should.exist(err);
				done(err);
			});

			stream.on("data", function (newFile) {

				should.exist(newFile);
				should.exist(newFile.contents);

				String(newFile.contents).should.equal(String(expectedFile.contents));
				done();
			});

			stream.write(srcFile);
			stream.end();
		});

		it("should produce expected file via stream", function (done) {

			var srcFile = new gutil.File({
				path: "test/fixtures/template.txt",
				cwd: "test/",
				base: "test/fixtures",
				contents: fs.createReadStream("test/fixtures/template.txt")
			});

			stream.on("error", function(err) {
				should.exist(err);
				done();
			});

			stream.on("data", function (newFile) {

				should.exist(newFile);
				should.exist(newFile.contents);

				newFile.contents.pipe(es.wait(function(err, data) {
					should.not.exist(err);
					String(data).should.equal(String(expectedFile.contents));
					done();
				}));
			});

			stream.write(srcFile);
			stream.end();
		});
	});	
	
});
