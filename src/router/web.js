import express from "express";
import homeController from '../controller/homeController';
let router = express.Router();

const initWebRoute = (app) => {
    //response the action show homepage
    router.get('/', homeController.getHomepage);
    //method get data by id to show data match the user id into the database
    router.get('/detail/user/:id', homeController.getDetailPage);
    //method post data to add new record and save on the database
    router.post('/create-new-user', homeController.createNewUser);
    //response the action show about page
    router.get('/about', (req, res) => {
        res.send(`I'm Eric!`)
    })

    //return router controller url
    return app.use('/', router)
}


export default initWebRoute;