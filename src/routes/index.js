const newsRouter = require('./news.js');
const siteRouter = require('./site.js');
const courseRouter = require('./course.js');
const meRouter = require('./me.js');

function routes(app) {
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
    app.use('/course', courseRouter);
    app.use('/me', meRouter);
}

module.exports = routes;
