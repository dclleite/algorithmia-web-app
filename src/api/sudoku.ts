import api from './api'

const getSudokuSolution = (board: number[][]) => {
  try {
    return api.get(`/sudoku`, {
      params: { board } 
    })
  } catch (error) {
    throw error
  }
}

export {
  getSudokuSolution
}