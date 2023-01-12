import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import NewsLetter from '../components/NewsLetter'

const Success = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <div className="wrapper grid">

        </div>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}
const Container = styled.div``
export default Success