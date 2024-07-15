const Document = require('../database/docSchema');


const createDocument = async (req, res) => {
  const { hashValue, name, email, documentDetails, intendedAudiences, additionalInformation, date } = req.body;

  try {
    const newDocument = new Document({
      hashValue,
      name,
      email,
      documentDetails,
      intendedAudiences,
      additionalInformation,
      date
    });

    const document = await newDocument.save();
  } catch (err) {
    console.error(err.message);
    // res.status(500).send('Server error');
  }
};

const retriveDocument = async (req, res) => {
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
    retriveDocument
};