import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRouter from './router/web';
import initAPIRoute from './router/api';

require('dotenv').config();
//morgan support log request
var morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8080;

//check and debug example middleware
// app.use((req, res, next) => {
//     //check => return res.send()
//     console.log('>>> run into my middleware');
//     console.log(req.method);
//     next();
// })
// app.use(morgan('combined'));

//middleware: support send data/ post data/ tranfer data better than before via encoded url param post
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup config view
configViewEngine(app);

//setup create router
initWebRouter(app);

//setup API request router
initAPIRoute(app);

//handle 404 not found
app.use((req, res) => {
    return res.render('404.ejs')
})

//check port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})