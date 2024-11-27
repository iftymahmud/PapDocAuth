// controllers/uploadController.js

const QRCode = require('qrcode');
const path = require('path');
const multer = require('multer');
const ocr = require('../services/ocrService.js');
const singleString = require('../services/stringService.js');
const sha256 = require('../services/sha256Service.js');
const popup = require('../services/popupService.js')
const { createDocument } = require('./documentController');

const UPLOAD_FOLDER = "./uploads/";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOAD_FOLDER);
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname.replace(fileExt, "").toLocaleLowerCase().split(" ").join("_");
        cb(null, fileName + fileExt);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10485760
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(new Error("Only PDF and JPEG are allowed!"));
        }
    }
});

const Document = require('../database/docSchema'); 


const handleFileUpload = async (req, res) => {
    try {
        // Perform OCR on the uploaded file
        const text = await ocr(req.file.filename);
        let modifiedText = singleString(text);
        let hashedText = sha256(modifiedText);
        console.log(hashedText);
        console.log(text);
        let imageUrl = UPLOAD_FOLDER + req.file.filename;

        // Prepare metadata for the QR code
        const metadata = {
            hashValue: hashedText,
            name: req.body.yourName,
            email: req.body.yourEmail,
            documentDetails: req.body.documentDetails,
            intendedAudiences: req.body.intendedAudience,
            additionalInformation: req.body.additionalInformation,
            date: new Date()
        };

        // Generate the popup text
        let popupText = popup(
            metadata.hashValue,
            req.file.filename,
            metadata.name,
            metadata.email,
            metadata.documentDetails,
            metadata.intendedAudiences,
            metadata.additionalInformation
        );

        // Save to Database
        const document = await createDocument(metadata);

        // Generate QR Code as Data URL
        const qrData = JSON.stringify(metadata);
        const qrCodeDataURL = await QRCode.toDataURL(qrData);

        // Render the dashboard with QR code
        res.render('dashboard', {
            imageUrl: imageUrl,
            popupText: popupText,
            qrCode: qrCodeDataURL // Pass the QR code data URL
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    upload,
    handleFileUpload
};
