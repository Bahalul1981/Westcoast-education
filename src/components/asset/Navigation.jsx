import React from "react";
import "./style/navigation.css";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div>
      <div className="nav-link">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/course">Courses</Link>
              <Link to="/teacher">Teachers</Link>
              <Link to="/add-teacher">Add teacher</Link>
              <Link to="/add-course">Add course</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
