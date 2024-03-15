import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRouter from './router/web';
// import connection from './configs/connectDB';

require('dotenv').config();
const app = express();
const port = process.env.PORT;

//config view
configViewEngine(app);
//create router
initWebRouter(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})