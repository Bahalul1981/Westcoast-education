import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../asset/Navigation";
import "../asset/style/teachers.css";

function AddTeacher() {
  const getFirstName = useRef();
  const getLastname = useRef();
  const getEmail = useRef();
  const getTelephone = useRef();
  const getPersonalNumber = useRef();
  const getSkills = useRef();
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const firstName = getFirstName.current.value;
    const lastName = getLastname.current.value;
    const email = getEmail.current.value;
    const telephone = getTelephone.current.value;
    const personalNumber = getPersonalNumber.current.value;
    const skills = getSkills.current.value;

    const postNewDAta = {
      firstName,
      lastName,
      email,
      telephone,
      personalNumber,
      skills,
    };

    fetch(`http://localhost:4000/teachers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postNewDAta),
    })
      .then((res) => {
        alert("New data added successfully");
        navigate("/teacher");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Navigation />

      <div className="Add-teacher-container">
        <h1>Add teacher</h1>
        <br />
        <form onSubmit={handelSubmit}>
          <div className="teachers-firstName">
            <label>First name</label> <br />
            <input
              type="text"
              placeholder="First name"
              ref={getFirstName}
              required
            />
          </div>
          <div className="teachers-lastName">
            <label>Last name</label> <br />
            <input
              type="text"
              placeholder="Lastname"
              ref={getLastname}
              required
            />
          </div>
          <div className="teachers-email">
            <label>E-mail</label> <br />
            <input type="email" placeholder="E-mail" ref={getEmail} required />
          </div>
          <div className="teachers-telephone">
            <label>Phone number</label> <br />
            <input
              type="number"
              placeholder="Phone"
              ref={getTelephone}
              required
            />
          </div>
          <div className="teachers-personalNumber">
            <label>Mobile number</label> <br />
            <input
              type="number"
              ref={getPersonalNumber}
              placeholder="Mobile number"
              required
            />
          </div>

          <div className="List-of-competence-areas">
            <label>Competence areas</label> <br />
            <textarea ref={getSkills} required></textarea>
          </div>
          <button>Add teacher</button>
        </form>
      </div>
    </>
  );
}

export default AddTeacher;
