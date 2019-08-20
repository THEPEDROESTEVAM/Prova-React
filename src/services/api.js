import Axios from 'axios';

const api = Axios.create({ baseURL: 'https://newsapi.org/v2/' });

export default api;