import axios from 'axios';


export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 81dc9cc94a20f86063c56a4e0095a0fb623c434dccd61e61d2e7ee0c999f11e3'
}
});
