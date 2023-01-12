import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import {popularProducts} from '../components/Data'
import Product from './Product';

const Products = () => {
  const Navigate = useNavigate();
  return (
    <Container className='grid'>
        {popularProducts.map(item=>{
            return(
              <div className='grid products'>
                <Product item={item}/>
                <button className='btn-alt btn' onClick={() => Navigate('/product') }>View</button>
              </div>
            )
        })}
        
    </Container>
  )
}

const Container =  styled.div`

    max-width:1100px;
    margin:auto;
    grid-template-columns:repeat(1, 1fr);
    gap:2rem 1rem;
    padding: 3rem 1.5rem;
    position: relative;
    .products{
      border:1px solid Var(--white-color2);
      gap:1rem;
      background:var(--cont-color);
      padding-bottom:1rem;
      .btn{
        margin:auto;
        min-width:5rem;
        padding:.25rem;
        font-size:.85rem;
      }
    }
    @media (min-width:480px){
      grid-template-columns:repeat(2, 1fr);
    }
    @media (min-width:760px){
      grid-template-columns:repeat(3, 1fr);
    }
    @media (min-width:960px){
      grid-template-columns:repeat(4, 1fr);
    }
`


export default Products