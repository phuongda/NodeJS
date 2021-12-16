import express from 'express';
import HomeController from '../controllers/homeController';

let router = express.Router();

let initWebRouters = (app) => {
    router.get("/", (req, res) => {
        return res.send('Hello World!');
    });

    router.get("/phuongda", HomeController.getHomePage);
    router.get("/about", HomeController.getAboutPage);
    router.get("/crud", HomeController.getCRUD);
    router.post("/post-crud", HomeController.postCRUD);

    return app.use("/", router) // khai báo sử dụng tất cả router đã khai báo
}

module.exports = initWebRouters;