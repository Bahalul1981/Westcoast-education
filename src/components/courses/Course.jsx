import "../asset/style/Courses.css";
import React from "react";
import { useEffect, useState } from "react";
import Navigation from "../asset/Navigation";
import useHttpClient from "../hooks/use-http-client";

function Course() {
  const [courses, setCourses] = useState([]);
  const { data, error } = useHttpClient(`http://localhost:4000/courses`);

  useEffect(() => {
    if (data) {
      console.log(data);
      setCourses(data);
    }
  }, [data]);
  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <div>
      <Navigation />

      <h1 className="list-of-all-teachers">List of all courses</h1>
      {courses.map((newCourses) => (
        <div key={newCourses.id} className="teachers-div">
          <h2>Course name: {newCourses.title}</h2>
          <hr />
          <p>Course number: {newCourses.couresenumber}</p>
          <p>Course duration: {newCourses.length} Weeks</p>
          <p>Course start: {newCourses.startDate}</p>
          <p>Course description: {newCourses.description}</p>
          <button className="read-more-button">
            <a href="*">Read more</a>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Course;
