import axios from 'axios'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import useQuery from '../../../hooks/useQuery'

const Callback = () => {
  const query = useQuery()
  const history = useHistory()

  useEffect(() => {
    const code = query.get('code')
    axios
      .get(`${process.env.REACT_APP_AUTH_SERVER}/auth`, {
        params: {
          code,
          client_id: process.env.REACT_APP_GITHUB_OAUTH_APP_CLIENT_ID,
        },
      })
      .then((res) => {
        const { access_token } = res.data
        if (!access_token) {
          console.error('no access token')
        }
      })
  }, [history, query])

  return <h1>Logging you in...</h1>
}

export default Callback
