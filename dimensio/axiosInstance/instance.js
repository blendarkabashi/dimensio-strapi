import axios from 'axios';
let token;
if (typeof window !== 'undefined') {
  token = localStorage.getItem('jwt');
}
const Axios = axios.create({
  baseURL: 'http://localhost:8082/api/',
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`,
  },
});

export default Axios;
