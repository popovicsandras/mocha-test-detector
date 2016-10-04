/* global describe, it */

"use strict";

var expect = require("chai").expect,
    extractTesctCase = require("../../extractTestCase.js");

describe("Test case extractor", function (){

    it("should return null if there is no match for test case inside given line", function() {
        var testCaseName = extractTesctCase("rewrewrew");

        expect(testCaseName).to.be.null;
    });

    it("should return the given test name in case of the simplest test case name", function() {

        var testCaseName = extractTesctCase("it('tutum')");

        expect(testCaseName).to.be.equal("tutum");
    });

    it("should return the given test suite name in case of the simplest test suite name", function() {

        var testCaseName = extractTesctCase("describe('tutum')");

        expect(testCaseName).to.be.equal("tutum");
    });

    it("should return the given test suite name in case of the simplest test suite name", function() {

        var testCaseName = extractTesctCase('describe("Parent group", function() {'); // jshint ignore:line

        expect(testCaseName).to.be.equal("Parent group");
    });

    it("should return the given test name in case of inner white spaces", function() {

        var testCaseName = extractTesctCase("it  (  'tutum'   )      ");

        expect(testCaseName).to.be.equal("tutum");
    });

    it("should return the given test name in case double quoted strings", function() {

        var testCaseName = extractTesctCase('it  (  "tutum"   )      '); // jshint ignore:line

        expect(testCaseName).to.be.equal("tutum");
    });

    it("should return the given test name in case of mixing quotemarks", function() {

        var testCaseName = extractTesctCase("it  (  " + '"' + "tutum'1" + '"' + "   )     "); // jshint ignore:line

        expect(testCaseName).to.be.equal("tutum'1");
    });

    it("should return the given test name in case of mixing quotemarks (the other way around)", function() {

        var testCaseName = extractTesctCase('it  (  ' + "'" + 'tutum"1' + "'" + '   )     '); // jshint ignore:line

        expect(testCaseName).to.be.equal('tutum"1'); // jshint ignore:line
    });

    it("should return the given test name in case it contains escaped quotes", function() {

        var testCaseName = extractTesctCase('it  (  "tutum \"retek\""   )      '); // jshint ignore:line

        expect(testCaseName).to.be.equal("tutum \"retek\"");
    });
});
