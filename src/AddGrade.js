import React, { useState, useContext } from "react";
import { Context } from "./App.js";
import { useForm } from "react-hook-form";

const AddGrade = () => {
  //const [course, setCourse] = useState("");
  const [grade, setGrade] = useState("9");
  const [term, setTerm] = useState("Fall");
  const [type, setType] = useState("Regular");
  const [letterGrade, setLetterGrade] = useState("A");

  const { addGrade } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleFormData = (data) => {
    console.log("Data", data);
    const newGrade = {
      id: Math.floor(Math.random() * 1000000),
      course: data.course,
      grade: grade,
      term: term,
      type: type,
      letterGrade: letterGrade,
    };

    addGrade(newGrade);
    //setCourse("");
    setGrade("9");
    setType("Regular");
    setTerm("Fall");
    setLetterGrade("A");
    reset();
  };
  const handleError = (errors) => {
    console.log("Error ", errors);
  };

  const registerOptions = {
    course: { required: "Course is required" },
  };

  return (
    <>
      <h3>Add new grade</h3>
      <form onSubmit={handleSubmit(handleFormData, handleError)}>
        <div className="form-control">
          <label htmlFor="text">Course</label>
          <input
            name="course"
            type="text"
            placeholder="Enter grade..."
            {...register("course", registerOptions.course)}
          />
          <small className="text-danger">
            {errors?.course && errors.course.message}
          </small>
        </div>
        <div className="form-control">
          <label htmlFor="text">Grade</label>

          <select
            className="form-select"
            aria-label="Default select example"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            <option name="9" selected>
              9
            </option>
            <option name="10">10</option>
            <option name="11">11</option>
            <option name="12">12</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="text">Term</label>

          <select
            className="form-select"
            aria-label="Default select example"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          >
            <option name="Fall">Fall</option>
            <option name="Spring">Spring</option>
            <option name="Summer">Summer</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="text">Type</label>

          <select
            className="form-select"
            aria-label="Default select example"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option name="Regular">Regular</option>
            <option name="H">H</option>
            <option name="AP">AP</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="text">Letter Grade</label>

          <select
            className="form-select"
            aria-label="Default select example"
            value={letterGrade}
            onChange={(e) => setLetterGrade(e.target.value)}
          >
            <option name="A">A</option>
            <option name="B">B</option>
            <option name="C">C</option>
            <option name="D">D</option>
            <option name="F">F</option>
          </select>
        </div>
        <button className="btn">Add Grade</button>
      </form>
    </>
  );
};

export default AddGrade;

/*
 <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            placeholder="Enter grade..."
          />
<input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Enter term..."
          />
<input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Enter type..."
          />

          
          <input
            type="text"
            value={letterGrade}
            onChange={(e) => setLetterGrade(e.target.value)}
            placeholder="Enter letter grade..."
          />

          <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Course</label>
          <input
            name="course"
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Enter course..."
          />
        </div>
*/

/*
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
    setGrade("9");
    setType("Regular");
    setTerm("Fall");
    setLetterGrade("A");
  };
*/
