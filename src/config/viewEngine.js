import express from 'express';

let configViewEngine = (app) => {
    app.use(express.static("./src/public")); // static là cấu hình cho express biết chỉ lấy file trong thư mục public
    app.set("view engine", "ejs"); // khai báo cho nodejs biết là dùng view engine từ ejs
    app.set("views", "./src/views") // set đường link lấy file view engine
}

module.exports = configViewEngine;