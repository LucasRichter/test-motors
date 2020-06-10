import Axios from "axios"

export const getVersions = async (modelId) => {
  const { data } = await Axios.get('Version', { params: { ModelID: modelId } })
  return data
}