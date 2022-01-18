import React from 'react'
import styled from 'styled-components'

const GnbLeft = () => {
  return (
    <LeftBar>
      <button>
        <img
          src="https://static.wanted.co.kr/images/icon-menu.png"
          alt="hamberger menu"
        />
      </button>
      <h1 className="logo">
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/logo_wanted_black.png"
          alt="main logo"
        />
      </h1>
    </LeftBar>
  )
}

export default GnbLeft

const LeftBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: inherit;
  button {
    img {
      width: 17px;
      height: 14px;
      object-fit: contain;
    }
  }
  .logo {
    width: 80px;
    overflow: hidden;
    img {
      margin-left: -53px;
      margin-top: -1px;
      transform: scale(0.8);
    }
  }
  @media ${(props) => props.theme.tablet} {
    width: 100% !important;
    justify-content: flex-start;
    height: 60px;
    padding-left: 5px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100% !important;
    justify-content: flex-start;
    height: 60px;
    padding-left: 5px;
  }
`
