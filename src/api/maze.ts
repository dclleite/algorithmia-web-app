import api from './api'

const getMazeSolution = (maze: number[][]) => {
  try {
    return api.get(`/sudoku`, {
      params: { maze } 
    })
  } catch (error) {
    throw error
  }
}

export {
  getMazeSolution
}