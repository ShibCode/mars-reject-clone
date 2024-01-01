export const duplicate = (arr, number) => {
  return new Array(number).fill(0).reduce((acc) => [...acc, ...arr], []);
};
