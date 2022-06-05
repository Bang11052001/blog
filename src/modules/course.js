const mongoose = require('mongoose');
var mongoose_delete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        title: { type: String, required: true, maxlength: 255 },
        description: { type: String, maxlength: 255 },
        image_url: { type: String, maxlength: 255 },
        video_id: { type: String, maxlength: 255 },
        people_count: { type: Number },
        slug: { type: String, slug: 'title', unique: true },
    },
    {
        timestamps: true,
    },
);

Course.plugin(mongoose_delete, {
    deletedAt: true,
    overrideMethods: 'all',
    deletedBy: true,
});

module.exports = mongoose.model('Course', Course);
