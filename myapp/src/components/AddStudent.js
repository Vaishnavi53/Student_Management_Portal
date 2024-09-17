import React, { useState } from 'react';
import axios from '../api';
import './AddStudent.css';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [branch, setBranch] = useState('');
  const [yop, setYop] = useState('');
  const [alert, setAlert] = useState({ message: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const studentData = {
        name,
        email,
        phone,
        course,
        branch,
        YOP: Number(yop), // Ensure YOP is a number
      };
      await axios.post('/students/add', studentData);
      setAlert({ message: 'Student added successfully', type: 'success' });
      clearForm();
    } catch (error) {
      console.error('Error adding student:', error);
      setAlert({ message: 'Error adding student', type: 'error' });
    }
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setCourse('');
    setBranch('');
    setYop('');
  };

  return (
    <div className="container">
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Name" 
          required 
        />
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
        />
        <input 
          type="tel" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          placeholder="Phone" 
          required 
        />
        <input 
          type="text" 
          value={course} 
          onChange={(e) => setCourse(e.target.value)} 
          placeholder="Course" 
          required 
        />
        <input 
          type="text" 
          value={branch} 
          onChange={(e) => setBranch(e.target.value)} 
          placeholder="Branch" 
          required 
        />
        <input 
          type="number" 
          value={yop} 
          onChange={(e) => setYop(e.target.value)} 
          placeholder="Year of Passing" 
          required 
        />
        <button type="submit">Add Student</button>
      </form>
      {/* Alert should be placed below the form */}
      <div className={`alert ${alert.type === 'success' ? 'show' : ''}`}>
        {alert.message}
      </div>
    </div>
  );
};

export default AddStudent;
