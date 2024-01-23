import React, { useContext } from "react";
import { getGPAForYears, getWeightedGPAForYears } from "./Util.js";
import { Context } from "./App.js";

const UnweightedWeightedGPA = ({ gradeYears }) => {
  const { grades } = useContext(Context);
  return (
    <>
      <h4>Grade {gradeYears.length === 1 ? gradeYears[0] : "Cumulative"}</h4>
      <div className="inc-exp-container">
        <div>
          <h4>Unweighted</h4>
          <p className="money plus">
            {getGPAForYears(grades, gradeYears).toFixed(2)}
          </p>
        </div>

        <div>
          <h4>Weighted</h4>
          <p className="money minus">
            {getWeightedGPAForYears(grades, gradeYears).toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
};

export default UnweightedWeightedGPA;
