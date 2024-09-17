// src/api/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/students'; // Update to match your backend URL

export const fetchStudents = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching students', error);
    throw error;
  }
};

export const addStudent = async (studentData) => {
  try {
    const response = await axios.post(`${API_URL}/add`, studentData);
    return response.data;
  } catch (error) {
    console.error('Error adding student', error);
    throw error;
  }
};

export const updateStudent = async (id, updateData) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, updateData);
    return response.data;
  } catch (error) {
    console.error('Error updating student', error);
    throw error;
  }
};

export const deleteStudent = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting student', error);
    throw error;
  }
};

// Add this function to fetch a student by ID
export const fetchStudentById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching student by ID', error);
    throw error;
  }
};
