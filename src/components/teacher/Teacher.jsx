import "../asset/style/teachers.css";
import React from "react";
import Navigation from "../asset/Navigation";
import { useEffect, useState } from "react";
import useHttpClient from "../hooks/use-http-client";
function Teacher() {
  const { data, error } = useHttpClient(`http://localhost:4000/teachers`);
  const [newdata, newsetData] = useState([]);
  useEffect(() => {
    if (data) {
      newsetData(data);
      console.log(data);
    }
  }, [data]);
  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const readMoreDetails = (addNew) => {
    const firstName = addNew.firstName;
    const laName = addNew.lastName;
    const skills = addNew.skills;
    const lorem =
      "consectetur adipisicing elit. Eum, quaerat. Natus fuga ab rem quos? Libero recusandae omnis perferendis nobis nemo inventore aliquam iure obcaecati nulla odit, optio, eum eius.";

    alert(
      `Name:${firstName}${" "}${laName}
Skills:${skills} ${lorem}`
    );
  };

  return (
    <div>
      <Navigation />
      <h1 className="list-of-all-teachers">List of all Teachers</h1>
      {newdata.map((newData) => (
        <div key={newData.id} className="teachers-div">
          <h2>
            Name:
            {newData.firstName} {newData.lastName}
          </h2>{" "}
          <hr />
          <p>E-mail: {newData.email}</p>
          <p>Telephone: {newData.telephone}</p>
          <p>Personal number: {newData.personalNumber}</p>
          <p>Skills: {newData.skills}</p>
          <button
            className="read-more-button"
            onClick={() => readMoreDetails(newData)}
          >
            Read more
          </button>
        </div>
      ))}
    </div>
  );
}

export default Teacher;
