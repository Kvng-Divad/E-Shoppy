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
                <div className="social-icon flex">
                    <Facebook style={{color:"3B5999"}}/>
                </div>
                <div className="social-icon flex">
                    <Instagram style={{color:"E4405F"}}/>
                </div>
                <div className="social-icon flex">
                    <Twitter style={{color:"55ACEE"}}/>
                </div>
                <div className="social-icon flex">
                    <Pinterest style={{color:"E60023"}}/>
                </div>
                <div className="social-icon flex">
                    <FaTiktok style={{color:"000"}}/>
                </div>
                
            </div>
        </div>
        <div className="footer-center grid">
            <h3 className="footer-title">Useful Links</h3>
            <div className="footer-center-links grid">
                <div className="footer-links grid">
                    <NavLink to='/' className="footer-link">Home</NavLink>
                    <NavLink to='' className="footer-link">Cart</NavLink>
                    <NavLink to='' className="footer-link">Men Fashion</NavLink>
                    <NavLink to='' className="footer-link">Women Fashion</NavLink>
                    <NavLink to='' className="footer-link">Accessories</NavLink>
                </div>

                <div className="footer-links grid">
                    <NavLink to='' className="footer-link">My Account</NavLink>
                    <NavLink to='' className="footer-link">Order Tracking</NavLink>
                    <NavLink to='' className="footer-link">Wishlist</NavLink>
                    <NavLink to='' className="footer-link">Register</NavLink>
                    <NavLink to='' className="footer-link">Terms</NavLink>
                </div>
            </div>
        </div>
        <div className="footer-right grid">
            <h3 className="footer-title">Contact</h3>
            <div className="footer-items grid">
                <span className="footer-item flex">
                    <span className="flex"> <Room/> </span> 622 Dixie Path , South Tobinchester 98336
                </span>
                <span className="footer-item flex">
                    <span className="flex"> <Phone/> </span> +1 234 56 78 
                </span>
                <span className="footer-item flex">
                    <span className="flex"> <MailOutline/></span> contact@lama.dev
                </span>
                <span className="footer-item flex">
                    <img src="https://i.ibb.co/Qfvn4z6/payment.png " alt="" className="footer-payment" />
                </span>
            </div>
        </div>
        
    </Container>
    )
    }

const Container =  styled.div`
    grid-template-columns:repeat(1,1fr);
    background:var(--skin-color);
    width:100%;
    height:100%;
    color:var(--white-text) !important;
    padding:3rem 1rem;
    gap: 2rem 0rem;

    .footer-title{
        font-size:1.25rem;
        font-weight:600;
        letter-spacing:1px;
        margin-bottom: .5rem;
    }

    .footer-left{
        gap:1rem;
        .logo{
            font-size:var(--h2-size);
            font-weight:700;
            font-family: var(--bdy-font-family-alt);
             span{
              font-size:var(--h3-size);
              font-weight:600;
              font-family: var(--bdy-font-family-alt4);
              color:var(--white-text)
            }
          }
          .footer-desc{
              font-weight:600;
              font-family: var(--bdy-font-family-alt);
              color:var(--white-text2)
          }
          .social-icon{
            width:2.15rem;
            height:2.15rem;
            border-radius:50%;
            background:var(--white-color);
            align-items:center;
            justify-content:center;
            :hover{
                scale:1.1;
            }
        
          }
          .social-links{
            gap:.5rem;
          }
    }
    .footer-center{
        justify-items:flex-start;
        gap:1rem;

        .footer-center-links{
            grid-template-columns:repeat(2,1fr);
            justify-items:center;
            gap:2rem;
        }
        .footer-links{
            gap:.25rem;
        }
        .footer-link{
            font-size:.95rem;
            font-weight:500;
            font-family: var(--bdy-font-family);
            color:var(--white-text2);
            :hover{
                color:var(--white-text);
            }
        }

    }
    .footer-right{
        .footer-items{
            gap:.5rem;
        }
        .footer-item{
            font-size:.95rem;
            color:var(--white-text2);
            gap:.75rem;
            align-items:center;
        }
        .footer-item span{
            font-size:.75rem;
            color:var(--white-text);
            align-items:center;
            justify-content:center;
        }
    }

    @media (min-width:960px){
        grid-template-columns:repeat(3,1fr);
        padding:3rem 2rem;
        .footer-center, .footer-right{
            justify-self:center;
        }
        .footer-title{
            margin-bottom: 0rem;
        }
    }
`

export default Footer