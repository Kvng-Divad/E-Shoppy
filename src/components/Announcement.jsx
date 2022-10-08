import React from 'react'
import styled from 'styled-components'

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}


const Container = styled.div`
    height:30px;
    background:var(--skin-color);
    font-size:var(--font-size-sm);
    color:var(--white-text);
    font-weight:500;
    display:flex;
    justify-content:center;
    align-items:center;
`
export default Announcement