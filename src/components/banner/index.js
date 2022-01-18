import React, { useState } from 'react'
import SliderContent from './SliderContent'
import SliderInfo from '../common/SliderInfo'
import styled from 'styled-components'

const len = SliderInfo.length - 2
const imgSize = 1080

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(-imgSize)
  const [transitionIndex, setTransitionIndex] = useState(0.5)

  const prevSlide = () => {
    activeIndex === -imgSize
      ? setActiveIndex(-imgSize * len) || setTransitionIndex(0)
      : setActiveIndex(activeIndex + imgSize) || setTransitionIndex(0.5)
  }
  const nextSlide = () => {
    activeIndex === -imgSize * len
      ? setActiveIndex(-imgSize) || setTransitionIndex(0)
      : setActiveIndex(activeIndex - imgSize) || setTransitionIndex(0.5)
  }

  return (
    <SliderContainer>
      <SliderContent
        SliderInfo={SliderInfo}
        activeIndex={activeIndex}
        transitionIndex={transitionIndex}
      />
      <button onClick={prevSlide} className="prev">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button onClick={nextSlide} className="next">
        <i class="fas fa-chevron-right"></i>
      </button>
    </SliderContainer>
  )
}

export default Banner

const SliderContainer = styled.div`
  padding-top: 25px;
  width: 100%;
  height: 300px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;

  .prev,
  .next {
    z-index: 100;
    position: absolute;
    top: 50%;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    border-radius: 15px;
    background-color: #fff;
    cursor: pointer;
  }
  .prev {
    left: 19%;
  }
  .next {
    right: 19%;
  }
`
