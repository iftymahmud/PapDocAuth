const express = require('express');
const router = express.Router();
const { upload, handleFileUpload } = require('../controllers/uploadController');

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

router.post('/upload', upload.single('file'), handleFileUpload);

module.exports = router;

