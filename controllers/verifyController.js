const path = require('path');
const multer = require('multer');
const ocr = require('../services/ocrService.js');
const singleString = require('../services/stringService.js');
const sha256 = require('../services/sha256Service.js');
const popup = require('../services/popupService.js')
const { retriveDocument } = require('./documentController');

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

const verifyupload = multer({
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


const verifyHandleFileUpload = async (req, res) => {
    const text = await ocr(req.file.filename);
    let modifiedText = singleString(text);
    let hashedText = sha256(modifiedText);

    let imageUrl = UPLOAD_FOLDER+ req.file.filename;


    const findHash = {
        body: {
            hashValue: hashedText,
        }
    };


    let retreivedHashContents = await retriveDocument(findHash);
    console.log(retreivedHashContents);

    if(retreivedHashContents === -1){
        res.render('verify', { 
            imageUrl: imageUrl,
            status: -1
        });
    }else{
        res.render('verify', { 
            imageUrl: imageUrl,
            status: 1,
            hashValue: hashedText,
            name: retreivedHashContents.name,
            email: retreivedHashContents.email,
            documentDetails: retreivedHashContents.documentDetails,
            intendedAudiences: retreivedHashContents.intendedAudiences,
            additionalInformation: retreivedHashContents.additionalInformation,
            date: retreivedHashContents.date
        });
    }

    
};

module.exports = {
    verifyupload,
    verifyHandleFileUpload
};

