import "./App.css";
import GPAList from "./GPAList";
import GradeList from "./GradeList";
import AddGrade from "./AddGrade";
import React, { useReducer } from "react";
const initialState = {
  grades: [
    {
      id: 1,
      course: "AP Computer Science A",
      grade: "9",
      term: "Fall",
      type: "AP",
      letterGrade: "A",
    },
    {
      id: 2,
      course: "AP Computer Science A",
      grade: "9",
      term: "Spring",
      type: "AP",
      letterGrade: "B",
    },
    {
      id: 3,
      course: "Literature",
      grade: "9",
      term: "Fall",
      type: "Regular",
      letterGrade: "A",
    },
    {
      id: 4,
      course: "Literature",
      grade: "9",
      term: "Spring",
      type: "Regular",
      letterGrade: "C",
    },
    {
      id: 5,
      course: "Physics",
      grade: "10",
      term: "Fall",
      type: "H",
      letterGrade: "A",
    },
    {
      id: 6,
      course: "Physics",
      grade: "11",
      term: "Spring",
      type: "H",
      letterGrade: "C",
    },
    {
      id: 7,
      course: "AP Chem",
      grade: "12",
      term: "Fall",
      type: "AP",
      letterGrade: "C",
    },
    {
      id: 8,
      course: "AP Chem",
      grade: "12",
      term: "Spring",
      type: "AP",
      letterGrade: "A",
    },
  ],
};
export const Context = React.createContext(initialState);

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_GRADE":
      console.log(action.payload);
      return {
        ...state,
        grades: [action.payload, ...state.grades],
      };
    case "DELETE_GRADE":
      return {
        ...state,
        grades: state.grades.filter((grade) => grade.id !== action.payload),
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function deleteGrade(id) {
    dispatch({
      type: "DELETE_GRADE",
      payload: id,
    });
  }

  function addGrade(grade) {
    //console.log("in addGrade");
    //console.log(grade);
    dispatch({
      type: "ADD_GRADE",
      payload: grade,
    });
  }
  return (
    <Context.Provider
      value={{
        grades: state.grades,
        deleteGrade: deleteGrade,
        addGrade: addGrade,
      }}
    >
      <GPAList />
      <GradeList />
      <AddGrade />
    </Context.Provider>
  );
}

export default App;
