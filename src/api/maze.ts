import api from './api'

const getMazeSolution = (maze: number[][]) => {
  try {
    return api.get(`/maze`, {
      params: { maze } 
    })
  } catch (error) {
    throw error
  }
}

export {
  getMazeSolution
}