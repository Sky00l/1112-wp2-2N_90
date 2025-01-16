import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../blog.css'

const BlogForm = ({ blog, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    id: blog ? blog.id : '',
    title: blog ? blog.title : '',
    descrip: blog ? blog.descrip : '',
    category: blog ? blog.category : '',
    img: blog ? blog.img : '',
    remote_url: blog ? blog.remote_url : '',
  });

  useEffect(() => {
    if (blog) {
      setFormData({
        id: blog.id,
        title: blog.title,
        descrip: blog.descrip,
        category: blog.category,
        img: blog.img,
        remote_url: blog.remote_url,
      });
    }
  }, [blog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // 提交資料給父組件
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formDescrip">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="descrip"
          value={formData.descrip}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formImg">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          name="img"
          value={formData.img}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formRemoteUrl">
        <Form.Label>Remote URL</Form.Label>
        <Form.Control
          type="text"
          name="remote_url"
          value={formData.remote_url}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {blog ? 'Update Blog' : 'Add Blog'}
      </Button>
      <Button variant="secondary" onClick={onClose}>
        Cancel
      </Button>
    </Form>
  );
};

export default BlogForm;
