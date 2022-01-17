import React from 'react'
import styled from 'styled-components'

const GnbMenu = () => {
  return (
    <MenuBar>
      <ul class="gnb-nav-list">
        <li class="gnb-nav-item">
          <a href="/">채용</a>
        </li>
        <li class="gnb-nav-item is-active">
          <a href="/">이벤트</a>
        </li>
        <li class="gnb-nav-item">
          <a href="/">직군별 연봉</a>
        </li>
        <li class="gnb-nav-item">
          <a href="/">이력서</a>
        </li>
        <li class="gnb-nav-item">
          <a href="/">
            커뮤니티
            <span>New</span>
          </a>
        </li>
        <li class="gnb-nav-item">
          <a href="/">프리랜서</a>
        </li>
        <li class="gnb-nav-item">
          <a href="/">
            AI 합격예측
            <span>Beta</span>
          </a>
        </li>
      </ul>
    </MenuBar>
  )
}

export default GnbMenu

const MenuBar = styled.div`
  ul {
    display: flex;
    li {
      a {
        position: relative;
        font-size: 14px;
        line-height: 20px;
        font-weight: 600;
        padding: 15px;
        span {
          position: absolute;
          top: 10px;
          right: -7px;
          color: #36f;
          font-size: 9px;
          font-weight: 500;
        }
      }
    }
  }
`
