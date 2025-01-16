const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const Blog = require("../model/blogModel");

dotenv.config({ path: '../.env' });
//console.log(process.env);

mongoose.connect(process.env.DATABASE_LOCAL)
    .then(() => console.log("MongoDB Server connected"))
    .catch(err => {
        console.error("Error on connecting the MongoDB server:", err.message);
    });

// IMPORT DATA

const jsonBlog = JSON.parse(fs.readFileSync(`${__dirname}/blog.json`, "utf-8"));

const importBlog = async() => {
    try {
        await Blog.create(jsonBlog);
        console.log("Blog successfully imported");
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

// DELETE DATA
const deleteBlog = async() => {
    try {
        await Blog.deleteMany();
        console.log("Blog successfully deleted.");
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

if (process.argv[2] === "--import") {
    importBlog();
} else if (process.argv[2] === "--delete") {
    deleteBlog();

}