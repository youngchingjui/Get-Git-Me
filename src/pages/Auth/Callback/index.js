import React from 'react'
import useQuery from '../../../hooks/useQuery'

const Callback = () => {
  const query = useQuery()
  const code = query.get('code')

  return <h1>Logging you in...</h1>
}

export default Callback
