import Axios from "axios"

export const getModels = async (makeId) => {
  const { data } = await Axios.get('Model', { params: { MakeID: makeId }})
  return data
}