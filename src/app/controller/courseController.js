var Course = require('../../modules/course.js');
var mongoose_delete = require('mongoose-delete');

const courseController = {
    show(req, res) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                course = course.toObject();
                res.render('courses/course', { course: course });
            })
            .catch((error) => next(error));
    },
    create(req, res) {
        res.render('courses/createCourse');
    },
    store(req, res) {
        const formData = req.body;
        formData.image_url = `https://img.youtube.com/vi/${req.body.video_id}/sddefault.jpg`;
        const course = new Course(formData);
        course.save(function (err) {
            if (err) return handleError(err);
        });
        res.redirect('/');
    },
    myStored(req, res, next) {
        Course.find({})
            .then((courses) => {
                courses = courses.map((course) => course.toObject());
                res.render('courses/myCourse', { courses: courses });
            })
            .catch((error) => next(error));
    },
    edit(req, res, next) {
        Course.findById({ _id: req.query.id })
            .then((course) => {
                course = course.toObject();
                res.render('courses/updateCourse', { course });
            })
            .catch((error) => next(error));
    },
    update(req, res, next) {
        Course.updateOne({ _id: req.query.id }, req.body)
            .then((course) => {
                res.render('/me/course/stored');
            })
            .catch((error) => next(error));
    },
    delete(req, res, next) {
        Course.delete({ _id: req.query.id })
            .then((course) => {
                res.redirect('back');
            })
            .catch((error) => next(error));
    },
    trashCourse(req, res, next) {
        Course.findDeleted({})
            .then((courses) => {
                courses = courses.map((course) => course.toObject());
                res.render('courses/trashCourse', { courses: courses });
            })
            .catch((error) => next(error));
    },
    restoreCourse(req, res, next) {
        Course.restore({ _id: req.query.id })
            .then((course) => {
                res.redirect('back');
            })
            .catch((error) => next(error));
    },
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.query.id })
            .then((course) => {
                res.redirect('back');
            })
            .catch((error) => next(error));
    },
};

module.exports = courseController;
