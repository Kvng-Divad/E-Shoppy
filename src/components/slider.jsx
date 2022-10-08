import React, {useState} from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import styled from 'styled-components'
import {sliderItems} from '../components/Data'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container className='flex' >

        <Arrow className='arrow flex d-left' direction="left"  onClick={() => handleClick("left")}>
          <FaChevronLeft/>
        </Arrow>

        <Slide className="flex" slideIndex={slideIndex}>
        {sliderItems.map((item)=>{
          return(

          <div className='slide flex' key={item.id}>

            <div className="slide-image flex">
              <img src={item.img} alt="img" className="slide-img" />
            </div>

            <div className="slide-info grid">
              <h1 className='slide-title'>{item.title}</h1>
              <p className='slide-description'>{item.desc}</p>
              <button className='btn'> SHOW NOW </button>
            </div>

          </div>

          )
          }
          )}

        </Slide>

        <Arrow className='arrow flex d-right' direction="right" onClick={() => handleClick("right")}>
          <FaChevronRight/>
        </Arrow>
    </Container>
  )
}

const Arrow = styled.div`
  width:3rem;
  height:3rem;
  background:var(--white-text2);
  border-radius:50%;
  justify-content:center;
  align-items:center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`

const Slide = styled.div`
  height: 100%;
  transform:translateX(${(props)=> props.slideIndex * -100}vw);
  transition:all 1.5s ease;
`

const Container = styled.div`
  width:100%;
  height:100vh;
  position:relative;

  .slide{
    align-items:center;
    width: 100vw;
    height:100%;
  }
  .slide-image{
    flex:1;
    height:100%
    padding:3rem;
    justify-content:center;
  }
  .slide-img{
    width:80%;
    height:80%;
  }
  .slide-info{
    flex:1;
    gap: 1rem;
  }
  .d-left{
    left:10px;
  }
  .d-right{
    right:10px;
  }
  .slide-title{
    font-size:3.5rem;
    font-weight:700;
    color:var(--dark-text);
    font-family:var(--bdy-font-family-alt4);
  }
  .slide-description{
    font-size:var(--font-size-nr);
    color:var(--dark-text2);
    font-weight:500;
    font-family:var(--bdy-font-family);
  }
  
 
`
export default Slider