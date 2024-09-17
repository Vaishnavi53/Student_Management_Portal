import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateStudent, fetchStudentById } from '../api/api';
import './EditStudent.css';

const EditStudent = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getStudent = async () => {
      try {
        const data = await fetchStudentById(id);
        setFormData(data);
      } catch (error) {
        console.error('Error fetching student', error);
      }
    };

    getStudent();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateStudent(id, formData);
      alert('Student updated successfully');
      navigate('/students');
    } catch (error) {
      console.error('Error updating student', error);
    }
  };

  return (
    <div className="edit-student">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={formData.name || ''} 
          onChange={handleChange} 
          placeholder="Name" 
          required 
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email || ''} 
          onChange={handleChange} 
          placeholder="Email" 
          required 
        />
        <input 
          type="tel" 
          name="phone" 
          value={formData.phone || ''} 
          onChange={handleChange} 
          placeholder="Phone" 
          required 
        />
        <input 
          type="text" 
          name="course" 
          value={formData.course || ''} 
          onChange={handleChange} 
          placeholder="Course" 
          required 
        />
        <input 
          type="text" 
          name="branch" 
          value={formData.branch || ''} 
          onChange={handleChange} 
          placeholder="Branch" 
          required 
        />
        <input 
          type="number" 
          name="YOP" 
          value={formData.YOP || ''} 
          onChange={handleChange} 
          placeholder="Year of Passing" 
          required 
        />
        <button type="submit">Update Student</button>
        <button type="button" onClick={() => navigate('/students')}>Cancel</button>
      </form>
    </div>
  );
};

export default EditStudent;
