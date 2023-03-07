function getNonZeroPositions(matrix: number[][]): [number, number][] {
  const nonZeroPositions: [number, number][] = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== 0) {
        nonZeroPositions.push([i, j]);
      }
    }
  }

  return nonZeroPositions;
}

export {
  getNonZeroPositions
}