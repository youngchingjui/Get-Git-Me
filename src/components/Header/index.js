import React from 'react'
import styled from 'styled-components'
import logo from './Logo.png'

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 10px;
`

const LogoImage = styled.img`
  width: 120px;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoImage src={logo} alt="Logo" />
    </HeaderWrapper>
  )
}

export default Header
