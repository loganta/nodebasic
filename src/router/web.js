import express from "express";
import homeController from '../controller/homeController';
import multer from "multer";
import path from 'path';

var appRoot = require('app-root-path');

//use Router service of express framework js
let router = express.Router();

//upload file variable
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appRoot + "/src/public/image/");
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter });
//end upload file variable

const initWebRoute = (app) => {
    //response the action show homepage
    router.get('/', homeController.getHomepage);

    //method get data by id to show data match the user id into the database
    router.get('/detail/user/:id', homeController.getDetailPage);

    //method post data to add new record and save on the database
    router.post('/create-new-user', homeController.createNewUser);

    //method post data to delete on the database
    router.post('/delete-user', homeController.deleteUser);

    //method get data to show data on edit page
    router.get('/edit-user/:id', homeController.getEditPage);

    //method post data to update data after edit action
    router.post('/update-user', homeController.postUpdateUser);

    /*----------------------------------------------------*/

    //respon the page content upload file
    router.get('/upload', homeController.getUploadFilePage);
    //handle upload file function
    router.post('/upload-profile-pic', upload.single('profile_pic'), homeController.handleUploadFile)

    /*----------------------------------------------------*/

    //response the action show about page
    router.get('/about', (req, res) => {
        res.send(`About page content`)
    })

    //return current "router" controller url choosed by client action
    return app.use('/', router)
}

//export to use router config
export default initWebRoute;