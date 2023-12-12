const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './public/uploads/')
    },
    filename : (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg'
        || file.mimetype === 'image/jpg'
        || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

let upload = multer({
    storage : storage,
    limits : {
        fileSize : 1024 * 1024 * 3
    },
    fileFilter : fileFilter
});

module.exports = upload;