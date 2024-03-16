import express from "express";

const configViewEngine = (app) => {
    //define folder contain static file to use
    app.use(express.static("./src/public"));

    //define view tech to use is ejs type
    app.set("view engine", "ejs");

    //define folder patch contain view template
    app.set("views", "./src/views")
}

//export to use the view config
export default configViewEngine;