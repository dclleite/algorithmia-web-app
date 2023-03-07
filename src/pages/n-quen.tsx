import React, { useState, ChangeEvent } from "react";
import Head from "next/head";

import Button from "@components/button";
import Input from "@components/text-input";
import Matrix from "@components/matrix";
import Loader from "@components/circular-loading";

import { getNqueenSolution } from '@api/n-queen'

import styles from "@styles/Problems-screens.module.css";

function createNQueenBoard(n: number, positions: [number, number][]): string[][] {
  const matrix = Array(n).fill(null).map(() => Array(n).fill(''));

  positions.forEach((row) => {
    for (let i = 0; i < n; i++) {
      matrix[row[0]][row[1]] = 'Q';
    }
  });

  return matrix;
}

export default function NQueen() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [matrixData, setMatrixData] = useState<string[][]>([])
  const [selectedCells, setSelectedCells] = useState<[number, number][]>([])

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  async function handleButtonClick() {
    if (inputValue.trim() !== "") {
      setIsLoading(true)
      const { data } = await getNqueenSolution(Number(inputValue))
      if (data.solution?.length) {
        setMatrixData(createNQueenBoard(data.solution.length, data.solution))
        setSelectedCells(data.solution)
      }
      setIsLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>N-queen problem</title>
        <meta name="description" content="N-queen problem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.title}>N-queen problem</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="n-queens"
            />
            <Button onClick={handleButtonClick}>
              Generate result
            </Button>
          </div>
          <div className={styles.result}>
            {isLoading
              ? <Loader color="#333333" size="80px" />
              : <Matrix data={matrixData} selectedCells={selectedCells} />
            }
          </div>
        </div>
      </main>
    </>
  );
}
