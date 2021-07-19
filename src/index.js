module.exports = function solveSudoku(matrix) {
  const checkBox = (matrix, row, col, value) => {
    for (let i = 0; i < 9; i++) {
      const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const boxCol = 3 * Math.floor(col / 3) + (i % 3);

      if (
        matrix[row][i] === value ||
        matrix[i][col] === value ||
        matrix[boxRow][boxCol] === value
      ) {
        return false;
      }
    }
    return true;
  };

  const findNull = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (matrix[i][j] === 0) {
          for (let value = 1; value <= 9; value++) {
            if (checkBox(matrix, i, j, value)) {
              matrix[i][j] = value;
              if (findNull()) return matrix;
            }
          }
          matrix[i][j] = 0;
          return false;
        }
      }
    }
    return matrix;
  };

  return findNull();
};
