import React from 'react'
import styled from 'styled-components'

const CategoryItem = ({item}) => {
  return (
    <Container className='grid'>
      <div className='category-img'>
        <img src={item.img} alt='img' className='category-image'/>
      </div>
     <div className="category-info flex">
        <h3 className="category-title">{item.title}</h3>
        <button className='btn-alt btn'>Shop Now</button>
        <p className="cat"></p>
     </div>
     
    </Container>
  )
}

const Container = styled.div`
    height:100%;
    position: relative;

    .category-img{
      width:100%;
      height:100%;
    }
    .category-image{
      width:100%;
      height:100%;
      object-fit: cover;
    }
    
    .category-info{
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        width: 100%;
        height: 100%;
        gap:1rem;
        flex-direction:column;
        align-items: center;
        justify-content: center;
    }
    
    .category-title {
        color:#fff;
        font-size:var(--h3-size);
        font-weight:700;
        letter-spacing:2.5px;
        font-family:var(--bdy-font-family)
        }
 `

export default CategoryItem