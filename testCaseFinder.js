var fs = require('fs');
var extractTestCase = require("./extractTestCase.js");

function findTestCase(fileName, lineNumber) {
    var testCaseName = null,
        counter = 0;

    var lines = fs.readFileSync(fileName).toString().split('\n');
    for(var i=0; i<lines.length && counter < lineNumber; i++)
    {
        var line = lines[i];
        var possibleTestCaseName = extractTestCase(line);
        if (possibleTestCaseName !== null) {
            testCaseName = possibleTestCaseName;
        }

        counter++;
    }

    return testCaseName;
}

module.exports = findTestCase;
