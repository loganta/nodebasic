import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//config view
configViewEngine(app);


app.get('/', (req, res) => {
    // res.send('Hello World! This is express on node js 8080')
    res.render('test/index.ejs');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})