import { useEffect, useState } from 'react'

const useSubdomain = () => {
  const [subdomain, setSubdomain] = useState('')

  useEffect(() => {
    setSubdomain(window.location.hostname.split('.')[0])
    // Error handle if this points to the main page getgitme.com
  }, [])

  return { subdomain }
}

export default useSubdomain
