const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({

    img: String,
    remote_img: String,
    category: String,
    title: String,
    desc: String,
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;