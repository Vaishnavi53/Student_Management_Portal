// src/components/AllStudents.js
import React, { useEffect, useState } from 'react';
import { fetchStudents } from '../api/api';

const AllStudents = () => {
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

  return (
    <div>
      <h1>All Students</h1>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            {student.name} - {student.email} - {student.phone} - {student.course} - {student.branch} - {student.YOP}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllStudents;
