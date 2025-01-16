// routes/blogs.js

const express = require('express');
const router = express.Router();

// 假設你有 MongoDB 的 Blog 模型
const Blog = require('../model/blogModel');

// 取得所有 blogs
router.get('/', async(req, res) => {
    try {
        const blogs = await Blog.find(); // 從 MongoDB 取得資料
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 新增一篇 blog
router.post('/', async(req, res) => {
    const { title, desc, img, remote_img, category } = req.body;
    const newBlog = new Blog({ title, desc, img, remote_img, category });
    try {
        await newBlog.save(); // 儲存到 MongoDB
        res.status(201).json(newBlog);
    } catch (error) {
        console.error('Error creating blog:', error); // 在伺服器端打印錯誤訊息
        res.status(400).json({ message: error.message });
    }
});

// 更新一篇 blog
router.patch('/:id', async(req, res) => {
    try {

        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedBlog);
    } catch (error) {
        console.error('Error creating blog:', error); // 在伺服器端打印錯誤訊息
        res.status(400).json({ message: error.message });

    }
});

// 刪除一篇 blog
router.delete('/:id', async(req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ message: 'Blog deleted' });
    } catch (error) {
        console.error('Error creating blog:', error); // 在伺服器端打印錯誤訊息
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;