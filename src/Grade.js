import React, { useContext } from "react";
import { Context } from "./App.js";
import { getGPA, getWeightedGPA } from "./Util.js";

const Grade = ({ grade }) => {
  const { deleteGrade } = useContext(Context);
  return (
    <tr>
      <th scope="row">{grade.id}</th>
      <td>{grade.course}</td>
      <td>{grade.grade}</td>
      <td>{grade.term}</td>
      <td>{grade.type}</td>
      <td>{grade.letterGrade}</td>
      <td>{getGPA(grade.letterGrade).toFixed(2)}</td>
      <td>{getWeightedGPA(grade.letterGrade, grade.type).toFixed(2)}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => {
            deleteGrade(grade.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Grade;
