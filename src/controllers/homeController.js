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

let displayCRUD = async (req, rep) => {
    let data = await CRUDService.getAllUser();
    return rep.render('displayCrud.ejs', {
        dataTable: data
    });
}

let getEditCRUD = async (req, rep) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        return rep.render('editCrud.ejs', {
            userData: userData
        });
    } else {
        return rep.send('Hello from edit page');
    }
}

let putCRUD = async (req, rep) => {
    let data = req.body;
    let allUser = await CRUDService.updateUserData(data);
    return rep.render('displayCrud.ejs', {
        dataTable: allUser
    });
}

let deleteCRUD = async (req, rep) => {
    let userId = req.query.id;
    if (userId) {
        await CRUDService.deleteUserInfoById(userId);
        return rep.send('Delete user success!');
    } else {
        return rep.send('User not found!');
    }
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayCRUD: displayCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}