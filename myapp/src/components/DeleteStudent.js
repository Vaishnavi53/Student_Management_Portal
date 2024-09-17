import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteStudent, fetchStudentById } from '../api/api';

const DeleteStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteStudentById = async () => {
      try {
        await deleteStudent(id);
        alert('Student deleted successfully');
        navigate('/students');
      } catch (error) {
        console.error('Error deleting student', error);
      }
    };

    deleteStudentById();
  }, [id, navigate]);

  return <div>Deleting student...</div>;
};

export default DeleteStudent;
