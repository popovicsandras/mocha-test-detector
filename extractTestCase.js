var testPattern = /(?:it|describe)\s*\(\s*(['"])(.*)\1/;

function extractTesctCase(line) {
    var matches = line.match(testPattern);

    if (matches) {
        return matches[2];
    }

    return null;
}

module.exports = extractTesctCase;
