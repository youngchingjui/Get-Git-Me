import axios from 'axios'

const github = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: 'Bearer 58933936c9884798cb15f18c39247a1a03084904',
  },
})

export default github
