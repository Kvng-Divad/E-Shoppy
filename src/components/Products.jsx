import React from 'react'
import styled from 'styled-components'
import {popularProducts} from '../components/Data'
import Product from './Product';

const Products = () => {
  return (
    <Container className='grid'>
        {popularProducts.map(item=>{
            return(
                <Product item={item}/>
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