function generatePascalsTriangle(row, col) {
  if (col === 0 || col === row) {
    return 1;
  } else {
    return generatePascalsTriangle(row - 1, col - 1) + generatePascalsTriangle(row - 1, col);
  }
}

function printPascalsTriangle(rows) {
  if (rows < 1) {
    return;
  }

  const maxWidth = generatePascalsTriangle(rows - 1, Math.floor(rows / 2)).toString().length * 2;

  for (let i = 0; i < rows; i++) {
    let rowString = ' '.repeat((rows - i - 1) * maxWidth / 2);

    for (let j = 0; j <= i; j++) {
      const currentValue = generatePascalsTriangle(i, j);
      rowString += currentValue.toString().padStart(maxWidth, ' ') + ' '.repeat(maxWidth);
    }

    console.log(rowString);
  }
}

// Call the function to print Pascal's Triangle in pyramid shape with 5 rows.
printPascalsTriangle(5);
