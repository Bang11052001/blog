const Course = require('../../modules/course.js');

const siteController = {
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                courses = courses.map((course) => course.toObject());
                res.render('home', { courses });
            })
            .catch((error) => next(error));
    },

    search(req, res) {
        res.render('search');
    },
};

module.exports = siteController;
