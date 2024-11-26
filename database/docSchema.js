// database/docSchema.js

const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  hashValue: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/\S+@\S+\.\S+/, 'is invalid']
  },
  documentDetails: {
    type: String,
    required: true
  },
  intendedAudiences: {
    type: String,
    required: true
  },
  additionalInformation: {
    type: String
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
