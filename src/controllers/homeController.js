let getHomePage = (req, rep) => {
    // return rep.send('Xin chào mọi người!');
    return rep.render('homepage.ejs');
}

let getAboutPage = (req, rep) => {
    return rep.render('test/about.ejs');
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
}