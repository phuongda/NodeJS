import db from '../models/index';

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

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
}