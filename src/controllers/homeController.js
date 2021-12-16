import db from '../models/index';
import CRUDService from '../services/CRUDService'

let getHomePage = async (req, rep) => {
    try {
        let data = await db.User.findAll();
        // return rep.send('Xin chào mọi người!');
        return rep.render('homepage.ejs', { data: JSON.stringify(data) });
    } catch (error) {
        console.log(error);
    }
}

let getAboutPage = (req, rep) => {
    return rep.render('test/about.ejs');
}

let getCRUD = (req, rep) => {
    return rep.render('crud.ejs');
}

let postCRUD = async (req, rep) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return rep.send('Post CRUD from server');
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}