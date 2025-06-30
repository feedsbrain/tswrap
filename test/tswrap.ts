import axios, { AxiosResponse } from 'axios'
import * as tswrap from '../src/tswrap'

const clearClient = () => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost'
  })
  axiosInstance.defaults.headers.common['Accept-Version'] = '2.0.0'
  axiosInstance.defaults.headers.common.Authorization = 'Basic 12345'
  axiosInstance.defaults.headers.post['Content-Type'] = 'application/json'
  return axiosInstance
}

const testAxios = async () => {
  const test = await tswrap.wrapAxios(clearClient().get(''))
}
