const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img')
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}_${Date.now()}.${file.originalname.split('.')[1]}`);
    }
});

const upload = multer ({storage});

module.exports = upload;
   