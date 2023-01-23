import React from "react";
import { useRef } from "react";
import Navigation from "../asset/Navigation";
import { useNavigate } from "react-router-dom";

function AddCourse() {
  const getCourseTitle = useRef();
  const getCourseNumber = useRef();
  const getCourseLength = useRef();
  const getStartDate = useRef();
  const getDescription = useRef();

  const navigate = useNavigate();

  const addCourses = (e) => {
    e.preventDefault();

    const title = getCourseTitle.current.value;
    const couresenumber = getCourseNumber.current.value;
    const length = getCourseLength.current.value;
    const startDate = getStartDate.current.value;
    const description = getDescription.current.value;
    const newCourseData = {
      title,
      couresenumber,
      length,
      startDate,
      description,
    };

    fetch(` http://localhost:4000/courses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCourseData),
    })
      .then((res) => {
        alert("New course has been added");
        navigate("/course");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navigation />

      <div className="Add-teacher-container">
        <h1>Add Course</h1>
        <br />
        <form onSubmit={addCourses}>
          <div className="course-title">
            <label>Course title</label> <br />
            <input
              type="text"
              name="Course Title"
              placeholder="Course title"
              ref={getCourseTitle}
              required
            />
          </div>
          <div className="course-number">
            <label>Course number</label> <br />
            <input
              type="number"
              name="Course number"
              placeholder="Course number"
              ref={getCourseNumber}
              required
            />
          </div>
          <div className="course-length">
            <label>Course length</label> <br />
            <input
              type="number"
              name="Course length"
              placeholder="Course length"
              ref={getCourseLength}
              required
            />
          </div>
          <div className="course-duration">
            <label>Course start</label> <br />
            <input
              type="date"
              name="Course startdate"
              placeholder="Course startdate"
              ref={getStartDate}
              required
            />
          </div>
          <div className="course-description">
            <label>Course description</label> <br />
            <textarea name="course-description" ref={getDescription}></textarea>
          </div>
          <button>Add</button>
        </form>
      </div>
    </>
  );
}

export default AddCourse;
