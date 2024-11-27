// controllers/documentController.js

const Document = require('../database/docSchema');


const createDocument = async (data) => {
  try {
      const newDocument = new Document(data);
      const document = await newDocument.save();
      return document;
  } catch (err) {
      console.error(err.message);
      throw new Error('Server error');
  }
};

const retrieveDocument = async (req, res) => {
    const { hashValue } = req.body;

    try {
      const result = await Document.findOne({ hashValue: hashValue });
      if (result) {
        return result;
      } else {
        console.log("Couldn't find this document in MongoDB");
        return -1;
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  module.exports = {
    createDocument,
    retrieveDocument 
};