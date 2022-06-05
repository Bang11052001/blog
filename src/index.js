const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const routes = require('./routes');
const db = require('./config/db');
var methodOverride = require('method-override');
//connect to slug
mongoose.plugin(slug);

//connect to mongodb
db.connect();

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// http looger
// app.use(morgan('combined'))

app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum(a, b) {
                return a + b;
            },
        },
    }),
);

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// console.log('path :' + path.join(__dirname, 'resources/views'));

routes(app);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
