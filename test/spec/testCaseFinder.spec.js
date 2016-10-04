/* global describe, it */

"use strict";

var chai = require("chai"),
    expect = chai.expect,
    assert = chai.assert,
    findTestCase = require("../../testCaseFinder.js");

describe("Test case finder", function (){

    it("should return null if test case is not found", function() {
        var testCaseName = findTestCase("test/fixtures/fileWithoutTestCases.js", 42);

        expect(testCaseName).to.be.null;
    });

    it("should return the preceding test case name for the given line", function() {

        var line2testCaseName = {
            4: null,
            5: "Parent group",
            16: "Parent group",
            23: "should test something 1",
            34: "should test something 1",
            35: "Inner group 1",
            38: "Inner group 1",
            58: "should test something 3",
            71: "Inner group 2",
            83: "should test something 4",
            10000: "should test something 4"
        };

        for (var i in line2testCaseName) {
            if (line2testCaseName.hasOwnProperty(i)) {
                var testCaseName = findTestCase("test/fixtures/fileWithTestCases.js", i);
                assert.equal(
                    testCaseName,
                    line2testCaseName[i],
                    "Expected testcase name: \"" + line2testCaseName[i] + "\" is not matching for line: " + i
                );
            }
        }
    });
});
