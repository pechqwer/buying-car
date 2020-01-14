import axios from 'axios'
/* eslint-disable */
const get = async (path) => {
  try {
    const getData = await axios.get(path)
    return getData
  } catch (error) {
    return error.response
  }
}

const post = async (path, data) => {
  try {
    const postData = await axios.post(path, data)
    return postData
  } catch (error) {
    return error.response
  }
}

const put = async (path, data) => {
  try {
    const putData = await axios.put(path, data)
    return putData
  } catch (error) {
    return error.response
  }
}
export const withResolve = async (route = 'get', path = null, data = null) => {
  if (path == null) { return 0 }
  if (route === 'get') { return await get(path) }
  if (route === 'post') { return await post(path, data) }
  if (route === 'put') { return await put(path, data) }
}

export default {
  withResolve
}
