import React, { useState, ChangeEvent } from "react";
import Head from "next/head";

import Button from "@components/button";
import Textarea from "@components/text-area";
import Matrix from "@components/matrix";
import Loader from "@components/circular-loading";

import { getNonZeroPositions } from '@helpers/matrix'
import { getMazeSolution } from '@api/maze'

import styles from "@styles/Problems-screens.module.css";

export default function Sudoku() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [matrixData, setMatrixData] = useState<number[][]>([])
  const [selectedCells, setSelectedCells] = useState<[number, number][]>([])


  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(event.target.value);
  }

  async function handleButtonClick() {
    if (inputValue.trim() !== "") {
      setIsLoading(true);
      const matrix = inputValue.split('\n').map((row) => row.trim().split(',').map((num) => Number(num.trim())))

      const { data } = await getMazeSolution(matrix)

      if (data.solution?.length) {
        setSelectedCells(getNonZeroPositions(data.solution))
        setMatrixData(data.solution)
      }
      setIsLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Maze problem</title>
        <meta name="description" content="sudoku problem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.title}>Maze problem</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3></h3>
            <Textarea
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Maze"
              rows={9}
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
