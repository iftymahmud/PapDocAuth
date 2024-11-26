// services/ocrService.js

const tesseract = require('tesseract.js');

const ocr = (fileName) => {
    return tesseract.recognize(
        `uploads/${fileName}`,
        'eng',
    ).then(({ data: { text } }) => {
        // console.log(text);
        return text;
    });
};



module.exports = ocr;
