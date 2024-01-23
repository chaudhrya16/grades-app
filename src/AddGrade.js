import React, { useState, useContext } from "react";
import { Context } from "./App.js";

const AddGrade = () => {
  const [course, setCourse] = useState("");
  const [grade, setGrade] = useState("");
  const [term, setTerm] = useState("");
  const [type, setType] = useState("");
  const [letterGrade, setLetterGrade] = useState("");

  const { addGrade } = useContext(Context);

  const onSubmit = (e) => {
    e.preventDefault();
    const newGrade = {
      id: Math.floor(Math.random() * 1000000),
      course: course,
      grade: grade,
      term: term,
      type: type,
      letterGrade: letterGrade,
    };

    addGrade(newGrade);
    setCourse("");
    setGrade("");
    setType("");
    setTerm("");
    setLetterGrade("");
  };

  return (
    <>
      <h3>Add new grade</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Course</label>
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Enter course..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Grade</label>
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            placeholder="Enter grade..."
          />
        </div>

        <div className="form-control">
          <label htmlFor="text">Term</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Enter term..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Type</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Enter type..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Letter Grade</label>
          <input
            type="text"
            value={letterGrade}
            onChange={(e) => setLetterGrade(e.target.value)}
            placeholder="Enter letter grade..."
          />
        </div>
        <button className="btn">Add Grade</button>
      </form>
    </>
  );
};

export default AddGrade;
