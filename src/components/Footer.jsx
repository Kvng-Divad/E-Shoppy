import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import { FaTiktok } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container className='grid'>
        <div className="footer-left grid">
            <h1 className='logo'>E<span>-Shoppy</span></h1>
            <p className="footer-desc">
             We beleive in delivering the best to our customers.
             Our customers are our utmost priority and we enjoying making you look your best in every season.
            </p>
            <div className="social-links flex">
                <div className="social-icon">
                    <Facebook/>
                </div>
                <div className="social-icon">
                    <Instagram/>
                </div>
                <div className="social-icon">
                    <Twitter/>
                </div>
                <div className="social-icon">
                    <Pinterest/>
                </div>
                <div className="social-icon">
                    <FaTiktok/>
                </div>
                
            </div>
        </div>
        <div className="footer-center grid">
            <h3 className="footer-title">Useful Links</h3>
            <div className="footer-links grid">
                <NavLink to='/' className="footer-link">Home</NavLink>
                <NavLink to='' className="footer-link">Cart</NavLink>
                <NavLink to='' className="footer-link">Men Fashion</NavLink>
                <NavLink to='' className="footer-link">Women Fashion</NavLink>
                <NavLink to='' className="footer-link">Accessories</NavLink>
                <NavLink to='' className="footer-link">My Account</NavLink>
                <NavLink to='' className="footer-link">Order Tracking</NavLink>
                <NavLink to='' className="footer-link">Wishlist</NavLink>
                <NavLink to='' className="footer-link">Terms</NavLink>
            </div>
        </div>
        <div className="footer-right grid">
            <h3 className="footer-title">Contact</h3>
            <div className="footer-items grid">
                <span className="footer-item flex">
                    <Room/> 622 Dixie Path , South Tobinchester 98336
                </span>
                <span className="footer-item flex">
                    <Phone/> +1 234 56 78
                </span>
                <span className="footer-item flex">
                    <MailOutline/> contact@lama.dev
                </span>
                <span className="footer-item flex"></span>
            </div>
        </div>
        
    </Container>
    )
    }

const Container =  styled.div`
    grid-template-columns:repeat(3,1fr);
    background:var(--skin-color);
    height:50vh;
    color:var(--white-text) !important;
    padding:3rem 2rem;

    .footer-title{
        font-size:1.25rem;
        font-weight:600;
        letter-spacing:1px;
    }

    .footer-left{
        gap:.5rem;
        .logo{
            font-size:var(--h2-size);
            font-weight:700;
            font-family: var(--bdy-font-family-alt);
             span{
              font-size:var(--h3-size);
              font-weight:600;
              font-family: var(--bdy-font-family-alt4);
              color:var(--white-text2)
            }
          }
          .footer-desc{
              font-weight:600;
              margin-top:-3rem;
              font-family: var(--bdy-font-family-alt);
              color:var(--white-text2)
          }
          .social-links{
            gap:.5rem;
          }
    }
    .footer-center{
        justify-items:center;
        .footer-links{
            gap:.15rem;
        }
        .footer-link{
            font-size:.95rem;
            font-weight:500;
            font-family: var(--bdy-font-family);
            color:var(--white-text2)
        }

    }
    .footer-right{
        margin-left:5rem;
        .footer-items{
            margin-top:-6rem;
        }
        .footer-item{
            font-size:.95rem;
            color:var(--white-text);
            gap:.5rem;
            margin-top:-3rem;
            align-items:center;
        }
    }

    
`

export default Footer