import React, { useContext } from "react";
import Grade from "./Grade.js";
import { Context } from "./App.js";

const GradeList = () => {
  const { grades } = useContext(Context);

  return (
    <>
      <h3>Grades</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
            <th scope="col">Term</th>
            <th scope="col">Type</th>
            <th scope="col">Letter Grade</th>
            <th scope="col">GPA</th>
            <th scope="col">Weighted GPA</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade) => (
            <Grade key={grade.id} grade={grade} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default GradeList;
