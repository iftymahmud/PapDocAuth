// services/stringService.js

const singleString = (rawText) => {
    return rawText.replace(/\s+/g, '');
};

module.exports = singleString;