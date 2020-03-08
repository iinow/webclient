import { AxiosRequestConfig } from 'axios'
import axios from 'axios'

const url = 'http://localhost:8080'

const axiosConfig: AxiosRequestConfig = {
  baseURL: url
}

export const service = axios.create(axiosConfig)
