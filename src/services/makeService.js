import Axios from "axios"

export const getMake = async () => {
  const { data } = await Axios.get('Make')
  return data
}