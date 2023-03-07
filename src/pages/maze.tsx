import React, { useState, ChangeEvent } from "react";
import Head from "next/head";

import Button from "@components/button";
import Textarea from "@components/text-area";
import Matrix from "@components/matrix";

import { getNonZeroPositions } from '@helpers/matrix'
import { getMazeSolution } from '@api/maze'

import styles from "@styles/Problems-screens.module.css";

export default function Sudoku() {
  const [inputValue, setInputValue] = useState("");
  const [matrixData, setMatrixData] = useState<number[][]>([])
  const [selectedCells, setSelectedCells] = useState<[number, number][]>([])


  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(event.target.value);
  }

  async function handleButtonClick() {
    if (inputValue.trim() !== "") {

      const matrix = inputValue.split('\n').map((row) => row.trim().split(',').map((num) => Number(num.trim())))

      const { data } = await getMazeSolution(matrix)

      console.log(data)

      if (data.solution?.length) {
        setSelectedCells(getNonZeroPositions(data.solution))
        setMatrixData(data.solution)
      }
    }
  }

  return (
    <>
      <Head>
        <title>sudoku problem</title>
        <meta name="description" content="sudoku problem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.title}>Sudoku problem</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3></h3>
            <Textarea
              value={inputValue}
              onChange={handleInputChange}
              placeholder="sudoku board"
              rows={9}
            />
            <Button onClick={handleButtonClick}>
              Generate result
            </Button>
          </div>
          <div className={styles.result}>
            <Matrix data={matrixData} selectedCells={selectedCells} />
          </div>
        </div>
      </main>
    </>
  );
}
