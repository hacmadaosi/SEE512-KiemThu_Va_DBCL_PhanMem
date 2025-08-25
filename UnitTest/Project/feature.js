export const solveLinearEquation = (a, b) => {
  if (a != 0) {
    return `${a}x ${b > 0 ? "+" : "-"} ${b != 0 ? b : ""} = 0, với nghiệm x = ${
      -b / a
    }`;
  }
};
