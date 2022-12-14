import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const CategoryItem = ({item}) => {
  const Navigate = useNavigate('')
  return (
    <Container className='grid'>
      <div className='category-img'>
        <img src={item.img} alt='img' className='category-image'/>
      </div>
     <div className="category-info flex">
        <h3 className="category-title">{item.title}</h3>
        <button className='btn-alt btn' onClick={() => Navigate('/products') }>Shop Now</button>
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
        padding:.25rem;
    }
    
    .category-title {
        color:#fff;
        font-size:var(--font-size-normal);
        font-weight:700;
        text-align:center;
        letter-spacing:2.5px;
        font-family:var(--bdy-font-family)
      }

    @media (min-width:760px){
      .category-title {
        font-size:var(--h3-size);
      }
      }
 `

export default CategoryItem