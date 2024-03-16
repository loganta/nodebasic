import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRouter from './router/web';
import initAPIRoute from './router/api';

require('dotenv').config();
const app = express();
const port = process.env.PORT;

//middleware: support send data/ post data/ tranfer data better than before via encoded url param post
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup config view
configViewEngine(app);

//setup create router
initWebRouter(app);

//setup API request router
initAPIRoute(app);



//check port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})