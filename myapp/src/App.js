import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import EditStudent from './components/EditStudent'; // Import EditStudent
import DeleteStudent from './components/DeleteStudent'; // Import DeleteStudent

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Add Student</Link></li>
            <li><Link to="/students">All Students</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<AddStudent />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/edit/:id" element={<EditStudent />} />
          <Route path="/delete/:id" element={<DeleteStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
