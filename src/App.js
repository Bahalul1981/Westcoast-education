import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course from "./components/courses/Course.jsx";
import Teacher from "./components/teacher/Teacher.jsx";
import Home from "./components/home/Home.jsx";
import AddTeacher from "./components/teacher/AddTeacher";
import AddCourse from "./components/courses/AddCourse.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/add-teacher" element={<AddTeacher />} />
        <Route path="/add-course" element={<AddCourse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
