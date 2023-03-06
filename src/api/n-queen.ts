import api from './api'

interface Response {
  solution?: [number, number][]
}

const getNqueenSolution = (n: number) => {
  try {
    return api.get<Response>(`/n-queen/${n}`)
  } catch (error) {
    throw error
  }
}

export {
  getNqueenSolution
}