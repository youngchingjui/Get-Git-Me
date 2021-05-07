import React from 'react'

const Auth = () => {
  const client_id = process.env.REACT_APP_GITHUB_OAUTH_APP_CLIENT_ID
  const scopes = ['read:user', 'public_repo', 'repo:status']
  return (
    <div>
      <h2>Login</h2>
      <form action={'http://github.com/login/oauth/authorize'}>
        <input type="hidden" name="client_id" value={client_id} />
        <input type="hidden" name="scope" value={encodeURI(scopes.join(' '))} />
        <input type="submit" value="Login with Github" />
      </form>
    </div>
  )
}

export default Auth
