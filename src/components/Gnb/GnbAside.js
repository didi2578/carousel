import React from 'react'
import SerchButton from '../common/icon/SearchButton'
import Bell from '../common/icon/Bell'
import Badge from '../common/icon/Badge'
import styled from 'styled-components'

const GnbAside = () => {
  return (
    <>
      <AsideBar>
        <ul>
          <li className="iconButton">
            <button>
              <SerchButton />
            </button>
          </li>
          <li className="iconButton">
            <button>
              <Bell />
              <Badge />
            </button>
          </li>
          <li className="menuDot">
            <i class="fas fa-ellipsis-h"></i>
          </li>
          <li className="pc-only">
            <button>
              <img
                src="https://lh3.googleusercontent.com/a-/AOh14GhfMaa41zXHT7TMpLev--nypLHFKLLu6UT0YOsx=s96-c"
                alt="profile"
              />
              <Badge />
            </button>
          </li>
          <li className="pc-only">
            <a href="/">기업 서비스</a>
          </li>
        </ul>
      </AsideBar>
    </>
  )
}

export default GnbAside

const AsideBar = styled.aside`
  ul {
    display: flex;
    align-items: center;
    .iconButton {
      margin-right: 10px;
    }
    .menuDot {
      margin-left: 7px;
    }
    li {
      a {
        font-size: 13px;
        color: #666;
        line-height: 30px;
        height: 30px;
        border: 1px solid #e1e2e3;
        border-radius: 15px;
        padding: 0 10px;
        margin-left: 15px;
        font-weight: 400;
        display: inline-block;
      }
      :last-child {
        display: inline-flex;
        :before {
          display: block;
          content: '';
          width: 1px;
          height: 10px;
          background-color: #e1e2e3;
          margin: auto 10px;
        }
      }
    }

    button {
      position: relative;
      height: 32px;
      img {
        border: 1px solid #e1e2e3;
        padding: 1px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
  }

  @media ${(props) => props.theme.desktop} {
    .menuDot {
      display: none !important;
      margin-left: 3px !important;
    }
  }

  @media ${(props) => props.theme.lgOnly} {
    .pc-only {
      display: none !important;
    }
    .iconButton {
      margin-right: 0 !important;
    }
  }
`
