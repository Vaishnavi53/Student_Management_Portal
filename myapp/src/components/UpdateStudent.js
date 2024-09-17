// src/components/UpdateStudent.js
import React, { useState } from 'react';
import { updateStudent } from '../api/api';

const UpdateStudent = () => {
  const [id, setId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    branch: '',
    YOP: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateStudent(id, formData);
      setMessage('Student updated successfully');
      setId('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        branch: '',
        YOP: ''
      });
    } catch (error) {
      setMessage('Error updating student');
      console.error('Error updating student', error);
    }
  };

  return (
    <div>
      <h1>Update Student</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
          placeholder="Student ID" 
          required 
        />
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Name" 
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Email" 
        />
        <input 
          type="tel" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          placeholder="Phone" 
        />
        <input 
          type="text" 
          name="course" 
          value={formData.course} 
          onChange={handleChange} 
          placeholder="Course" 
        />
        <input 
          type="text" 
          name="branch" 
          value={formData.branch} 
          onChange={handleChange} 
          placeholder="Branch" 
        />
        <input 
          type="number" 
          name="YOP" 
          value={formData.YOP} 
          onChange={handleChange} 
          placeholder="Year of Passing" 
        />
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateStudent;
