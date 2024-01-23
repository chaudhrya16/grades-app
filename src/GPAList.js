import React from "react";
import UnweightedWeightedGPA from "./UnweightedWeightedGPA.js";

//grade  is year
const GPAList = () => {
  return (
    <>
      <UnweightedWeightedGPA key="9" gradeYears={["9"]} />
      <UnweightedWeightedGPA key="10" gradeYears={["10"]} />
      <UnweightedWeightedGPA key="11" gradeYears={["11"]} />
      <UnweightedWeightedGPA key="12" gradeYears={["12"]} />
      <UnweightedWeightedGPA
        key="Cumulative"
        gradeYears={["9", "10", "11", "12"]}
      />
    </>
  );
};

export default GPAList;
