import express from 'express';
import HomeController from '../controllers/homeController';

let router = express.Router();

let initWebRouters = (app) => {
    router.get("/", (req, res) => {
        return res.send('Hello World!');
    });

    router.get("/phuongda", HomeController.getHomePage);
    router.get("/about", HomeController.getAboutPage);

    return app.use("/", router) // khai báo sử dụng tất cả router đã khai báo
}

module.exports = initWebRouters;