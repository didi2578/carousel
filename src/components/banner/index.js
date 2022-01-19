import React, { useEffect, useState } from 'react'
import SliderContent from './SliderContent'
import SliderInfo from '../common/SliderInfo'
import styled from 'styled-components'

const len = SliderInfo.length - 2

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(-1)
  const [transitionIndex, setTransitionIndex] = useState(0.5)

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionIndex(activeIndex === -len ? 0 : 0.5)
      setActiveIndex(activeIndex === -len ? -1 : activeIndex - 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [activeIndex])

  const prevSlide = () => {
    activeIndex === -1
      ? setActiveIndex(-len) || setTransitionIndex(0)
      : setActiveIndex(activeIndex + 1) || setTransitionIndex(0.5)
  }
  const nextSlide = () => {
    activeIndex === -len
      ? setActiveIndex(-1) || setTransitionIndex(0)
      : setActiveIndex(activeIndex - 1) || setTransitionIndex(0.5)
  }

  return (
    <SliderContainer>
      <SliderContent
        SliderInfo={SliderInfo}
        activeIndex={activeIndex}
        transitionIndex={transitionIndex}
      />
      <button onClick={prevSlide} className="btn prev">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button onClick={nextSlide} className="btn next">
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
    left: 17%;
  }
  .next {
    right: 17%;
  }
  @media ${(props) => props.theme.lgOnly} {
    .btn {
      display: none !important;
    }
  }
`
