import React from 'react'
import styled from 'styled-components'

const Badge = () => {
  return (
    <div>
      <BadgeStyle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5"
          height="5"
          viewBox="0 0 6 6"
        >
          <path
            d="M1.647 6V2.259h.041L4.158 6H6V0H4.353v3.357h-.031L2.089 0H0v6z"
            fill="#fff"
          />
        </svg>
      </BadgeStyle>
    </div>
  )
}
export default Badge
const BadgeStyle = styled.span`
  background-color: rgb(51, 102, 255);
  width: 13px;
  height: 13px;
  border-radius: 50%;

  font-size: 8px;

  position: absolute;
  top: -2px;
  right: -2px;
`
