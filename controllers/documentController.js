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
    res.status(500).send('Server error');
  }
};

const retriveDocument = async (req, res) => {
    // TO be Writted
  };

module.exports = {
    createDocument, 
    retriveDocument
};