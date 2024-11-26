// services/pupupService.js

const popup = (hash, file, name, email, docD, intA, addI) => {
let output = "<b>Generated Hash : </b>" + hash + "</br>"
+ "<b>File : </b>" + file + "</br>"
+ "<b>Your Name : </b>" + name + "</br>" 
+ "<b>Your Email : </b>" + email + "</br>" 
+ "<b>Document Details : </b>" + docD + "</br>"
+ "<b>Intended Audiences(s) : </b>" + intA + "</br>"
+ "<b>Additional Information : </b>" + addI;

return output;
}

module.exports = popup;

