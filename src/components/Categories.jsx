import React from 'react'
import styled from 'styled-components'
import {categories} from '../components/Data'
import CategoryItem from './CategoryItem'


const Categories = () => {
  return (
    <Container className='grid'>
        {categories.map(item =>(
            <CategoryItem item={item} key={item.id}/>
        )
        )}
    </Container>
  )
}

const Container = styled.div`
  padding:1.5rem;
  max-width:1100px;
  margin:auto;
  grid-template-columns:repeat(1, 1fr);
  justify-items:center;
  align-items:center;
  gap:1rem;

  @media (min-width:500px){
    grid-template-columns:repeat(3, 1fr);
  }
`

export default Categories