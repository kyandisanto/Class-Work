exports.homeView = (req, res) => {
    res.render('pages/home', { pageTitle: 'Home' });
};

exports.aboutView = (req, res) => {
    res.render('pages/about', { pageTitle: 'About' });
};