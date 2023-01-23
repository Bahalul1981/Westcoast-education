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
          <button className="read-more-button">
            <a href="/">Read more</a>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Teacher;
