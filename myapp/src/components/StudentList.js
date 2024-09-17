import React, { useEffect, useState } from 'react';
import { fetchStudents, deleteStudent } from '../api/api';
import { Link } from 'react-router-dom';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const data = await fetchStudents();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students', error);
      }
    };

    getStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      setStudents(students.filter(student => student._id !== id));
    } catch (error) {
      console.error('Error deleting student', error);
    }
  };

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            {student.name} - {student.email} - {student.phone}
            <Link to={`/edit/${student._id}`}><button>Edit</button></Link>
            <button onClick={() => handleDelete(student._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
