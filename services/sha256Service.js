const hashFunction = require('sha.js');

const sha256Method = (singleString) => {
    return hashFunction('sha256').update(singleString).digest('hex');
}

module.exports = sha256Method; 

