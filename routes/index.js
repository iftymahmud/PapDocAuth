const express = require('express');
const router = express.Router();
const { upload, handleFileUpload } = require('../controllers/uploadController');
const { verifyupload, verifyHandleFileUpload } = require('../controllers/verifyController');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

router.get('/verify', (req, res) => {
    res.render('verify');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.post('/upload', upload.single('file'), handleFileUpload);

router.post('/verifyupload', verifyupload.single('file'), verifyHandleFileUpload);

module.exports = router;

