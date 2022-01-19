import React from 'react'
import styled from 'styled-components'
const SliderContent = ({ SliderInfo, activeIndex, transitionIndex }) => {
  console.log(activeIndex)

  return (
    <ImgSlider
      style={{
        transform: `translateX(calc(${activeIndex} * 60%) )`,
        transition: `${transitionIndex}s all ease-in-out`,
      }}
    >
      {SliderInfo.map((slide, index) => (
        <div
          key={index}
          className={-index === activeIndex ? 'slides active' : 'slides'}
        >
          <img className="slide-image" src={slide.urls} alt={slide.title} />
          <div className="infoBox">
            <h2>{slide.title}</h2>
            <h3>{slide.span}</h3>
            <a href="/">
              바로가기 <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      ))}
    </ImgSlider>
  )
}

export default SliderContent

const ImgSlider = styled.section`
  min-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin-left: 20%;

  .slides {
    height: 100%;
    width: 60%;
    flex: 1 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    filter: brightness(50%);

    &.active {
      filter: brightness(100%);
    }
  }
  .slide-image {
    height: 100%;
    width: calc(100% - 20px);
    margin: 0 10px;
    border-radius: 4px;
  }
  .infoBox {
    position: absolute;
    bottom: 28px;
    width: 330px;
    height: 146px;
    border-radius: 4px;
    background-color: #fff;
    text-align: left;
    left: 34px;
    h2 {
      margin: 20px 20px 0 20px;
      font-size: 20px;
      line-height: 1.5;
      font-weight: 600;
    }
    h3 {
      margin: 0 20px;
      height: 44px;
      font-size: 14px;
      line-height: 1.64;
      color: #333;
    }
    a {
      border-top: 1px solid #ececec;
      font-size: 14px;
      font-weight: 700;
      line-height: 1;
      color: #36f;
      padding: 20px;
      display: block;
    }
  }

  @media ${(props) => props.theme.mintablet} {
    .slides {
      filter: brightness(100%);
    }
    .infoBox {
      width: 100% !important;
      position: initial !important;
      text-align: center !important;
      h3 {
        height: 20px !important;
      }
      a {
        border-top: none;
        padding: 15px 0 0 0 !important;
      }
    }
  }
`
