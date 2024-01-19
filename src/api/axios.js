import axios from 'axios'
import Cookies from 'js-cookie'

const apiUrl = process.env.VUE_APP_API_URL || 'http://127.0.0.1:8000'
const userdata = Cookies.get('user')
const user = userdata ? JSON.parse(userdata) : null
const accessToken = user ? user.accessToken : null

console.log(accessToken)
export default axios.create({
  baseURL: apiUrl,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken': Cookies.get('csrftoken'),
    'Authorization':  `Bearer ${accessToken}`
  }
})