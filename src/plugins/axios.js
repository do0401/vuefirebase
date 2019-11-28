import Vue from 'vue'
import Axios from 'axios'

const firebaseAPI = Axios.create({
  baseURL: 'http://localhost:5000/vuefirebase-638e5/us-central1/',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' }
})

firebaseAPI.interceptors.request.use(function (config) {
  config.headers.authorization = Math.random()
  return config
}, function (error) {
  return Promise.reject(error)
})

Vue.prototype.$axios = firebaseAPI
