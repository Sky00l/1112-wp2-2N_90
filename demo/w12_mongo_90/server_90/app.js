// app.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const blogRoutes = require('./routes/blogs'); // 引入 blog 路由

dotenv.config();

const app = express();

// 連接 MongoDB 資料庫
mongoose.connect(process.env.DATABASE_LOCAL)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('MongoDB connection error:', err));

// 使用中間件
app.use(cors());
app.use(express.json());

// 設定路由
app.use('/api/blogs', blogRoutes); // 使用 blog 路由

module.exports = app;