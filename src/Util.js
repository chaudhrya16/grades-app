export function getGPA(lg) {
  if (lg === "A") return 4.0;
  else if (lg === "B") return 3.0;
  else if (lg === "C") return 2.0;
  else if (lg === "D") return 1.0;
  else {
    return 0.0;
  }
}

export function getWeightedGPA(lg, courseType) {
  let gpa = getGPA(lg);
  if (courseType !== "Regular") {
    gpa = gpa + 1.0;
  }
  return gpa;
}

export function getGPAForYears(grades, years) {
  let count = 0;
  let sumGPA = 0.0;
  grades.forEach((grade) => {
    if (years === undefined || years === null) {
      sumGPA += getGPA(grade.letterGrade);
      count++;
    } else if (years.includes(grade.grade)) {
      sumGPA += getGPA(grade.letterGrade);
      count++;
    }
  });
  if (count === 0) {
    count = 1;
  }
  return sumGPA / count;
}

export function getWeightedGPAForYears(grades, years) {
  let count = 0;
  let sumGPA = 0.0;
  grades.forEach((grade) => {
    if (years === undefined || years === null) {
      sumGPA += grade.getWeightedGPA();
      count++;
    } else if (years.includes(grade.grade)) {
      sumGPA += getWeightedGPA(grade.letterGrade, grade.type);
      count++;
    }
  });
  if (count === 0) {
    count = 1;
  }
  return sumGPA / count;
}
