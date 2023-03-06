import React from "react";
import styles from "./styles.module.css";

type MatrixProps = {
  data: (number | string)[][];
  selectedCells?: [number, number][];
};

const Matrix = ({ data, selectedCells = [] }: MatrixProps) => {
  const cellStyle = (rowIndex: number, colIndex: number) => {
    const isSelected =
      selectedCells.findIndex(
        ([selectedRow, selectedCol]) =>
          selectedRow === rowIndex && selectedCol === colIndex
      ) !== -1;

    if (isSelected) {
      return `${styles.cell} ${styles.selectedCell}`;
    }

    return styles.cell;
  };

  return (
    <table className={styles.matrix}>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={`${rowIndex}-${colIndex}`} className={cellStyle(rowIndex, colIndex)}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Matrix;
