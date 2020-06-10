import Axios from "axios"

export const getVehicles = async (filters) => {
  const { data } = await Axios.get('Vehicles', { params: { Page: 1, ...filters }})
  return data
}