import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'


const Product = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Footer/>
    </Container>
  )
}

const Container = styled.div``
export default Product