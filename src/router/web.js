import express from "express";
import homeController from '../controller/homeController';
//use Router service of express framework js
let router = express.Router();

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

    //response the action show about page
    router.get('/about', (req, res) => {
        res.send(`About page content`)
    })

    //return current "router" controller url choosed by client action
    return app.use('/', router)
}

//export to use router config
export default initWebRoute;