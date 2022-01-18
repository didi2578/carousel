import React from 'react'
import styled from 'styled-components'
import GnbLeft from './GnbLeft'
import GnbAside from './GnbAside'
import GnbMenu from './GnbMenu'

const Gnb = () => {
  return (
    <div style={{ boxShadow: '0 1px 0 0 rgb(0 0 0 / 10%)' }}>
      <GnbNav>
        <GnbLeft />
        <GnbMenu />
        <GnbAside />
      </GnbNav>
    </div>
  )
}

export default Gnb

const GnbNav = styled.nav`
  max-width: 1060px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media ${(props) => props.theme.tablet} {
    padding: 0 30px 15px;
  }
  @media ${(props) => props.theme.mobile} {
    padding: 0 15px 10px;
  }
`
