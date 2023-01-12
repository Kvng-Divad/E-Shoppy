import React,{useState} from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import NewsLetter from '../components/NewsLetter'
import { Add, Remove } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const handleQuantity = (type) => {
      if (type === "dec") {
        quantity > 1 && setQuantity(quantity - 1);
      } else {
        setQuantity(quantity + 1);
      }
    }
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <div className="wrappers grid">
            <div className="title">
                <h1 className="page-title">YOUR BAG</h1>
            </div>
            <div className="container grid">

                <div className="top-texts flex">
                    <p className="top-text">Shopping Bag (3)</p>
                    <p className="top-text">Your Wishlist (0)</p>
                </div>

                <div className="top flex">
                    <button className="button alt" onClick={() => navigate('/products')}>CONTINUE SHOPPING</button>
                    <button className="button">CHECKOUT NOW</button>
                </div>
                

                <div className="bottom grid">
                    <div className="info-cont grid">
                        <div className="product-cont flex">
                            <div className="product-details flex">
                                    <div className="product-img">
                                        <img src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" alt="img" className="product-image" />
                                    </div>

                                    <div className="details  grid">

                                        <p className="detail p-name"><span>Product:</span>
                                            Stick Man T-shirt
                                        </p>

                                        <p className="detail id"><span>ID:</span>
                                            1756789042
                                        </p>

                                        <div className="color-info flex">
                                            <div className="color-img" style={{background:'black'}}></div>
                                            <span>Black</span>
                                        </div>

                                        <p className="detail size"><span>Size:</span>
                                            L
                                        </p>
                                    </div>
                                
                            </div>

                            <div className="price-details grid">

                                <div className="amount-container grid">
                                    <Add className="remove-btn" onClick={() => handleQuantity("inc")}/>
                                    <span className="amount flex">{quantity}</span>
                                    <Remove className="remove-btn" onClick={() => handleQuantity("dec")}/>
                                </div>
                                
                                <p className="price">$ 30</p>

                            </div>
                        </div>
                            <hr className='hr'/>

                        <div className="product-cont flex">
                            <div className="product-details flex">
                                    <div className="product-img">
                                        <img src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" alt="img" className="product-image" />
                                    </div>

                                    <div className="details  grid">

                                        <p className="detail p-name"><span>Product:</span>
                                            huski Gray Face Cap
                                        </p>

                                        <p className="detail id"><span>ID:</span>
                                            1756789489
                                        </p>

                                        <div className="color-info flex">
                                            <div className="color-img" style={{background:'Gray'}}></div>
                                            <span>Gray</span>
                                        </div>

                                        <p className="detail size"><span>Size:</span>
                                            22
                                        </p>
                                    </div>
                                
                            </div>

                            <div className="price-details grid">

                                <div className="amount-container grid">
                                    <Add className="remove-btn" onClick={() => handleQuantity("inc")}/>
                                    <span className="amount flex">{quantity}</span>
                                    <Remove className="remove-btn" onClick={() => handleQuantity("dec")}/>
                                </div>
                                
                                <p className="price">$ 10</p>

                            </div>
                        </div>
                        <hr className='hr'/>

                        <div className="product-cont flex">
                            <div className="product-details flex">
                                    <div className="product-img">
                                        <img src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" alt="img" className="product-image" />
                                    </div>

                                    <div className="details  grid">

                                        <p className="detail p-name"><span>Product:</span>
                                            Winter Coat
                                        </p>

                                        <p className="detail id"><span>ID:</span>
                                            1756756720
                                        </p>

                                        <div className="color-info flex">
                                            <div className="color-img" style={{background:'brown'}}></div>
                                            <span>Brown</span>
                                        </div>

                                        <p className="detail size"><span>Size:</span>
                                            XL
                                        </p>
                                    </div>
                                
                            </div>

                            <div className="price-details grid">

                                <div className="amount-container grid">
                                    <Add className="remove-btn" onClick={() => handleQuantity("inc")}/>
                                    <span className="amount flex">{quantity}</span>
                                    <Remove className="remove-btn" onClick={() => handleQuantity("dec")}/>
                                </div>
                                
                                <p className="price">$ 45</p>

                            </div>
                        </div>
                        <hr className='hr'/>

                    </div>

                    <div className="summary-cont grid">
                        <div className="title">
                            <h1 className="page-title">ORDER SUMMARY</h1>
                        </div>
                        <div className="summary-item">
                            <p className="summary-text">Subtotal</p>
                            <p className="summary-price">$ 85</p>
                        </div>
                        <div className="summary-item">
                            <p className="summary-text">Estimated Shipping</p>
                            <p className="summary-price">$ 5.70</p>
                        </div>
                        <div className="summary-item">
                            <p className="summary-text">Shipping Discount</p>
                            <p className="summary-price">$ -2.50</p>
                        </div>
                        <div className="summary-item">
                            <p className="summary-text total">Total</p>
                            <p className="summary-price total">$ 88.20</p>
                        </div>
                        <button className="button alt2">CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
        </div>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}
const Container = styled.div`
    .wrappers{
        width: 100%;
        padding: 2rem 1.5rem;
    }
    .container{
        width: 100%;
        gap:2rem;
    }
    .page-title{
        font-size:var(--h3-size);
        font-weight:700;
        text-align:center;
    }
    .top{
        justify-content: space-between;
        align-items:center;
        width: 100%;
    }
    .top-texts{
        justify-content: center;
        align-items:center;
        gap:3rem;
    }
    .top-text{
        padding: 1rem 0 0;
        font-weight: 700;
        font-size:.85rem;
        font-family:var(--bdy-font-family-alt4);
        color: var(--dark-text2);
    }
    
    .button{
        padding:.5rem;
        text-align:center;
        font-weight: var(--font-semibold);
        font-size:.85rem;
        color: var(--white-text);
        text-transform: uppercase;
        cursor: pointer;
        background:var(--skin-color);
        border: 1px solid var(--skin-color);
        box-shadow: var(--box-shadow);
        max-width:80%;
        max-height:3rem;
        :hover{
            background:transparent;
            color:var(--dark-text);
        }
    }
    .alt{
        background:transparent;
        color:var(--dark-text);
        :hover{
            background:var(--skin-color);
            color:var(--white-text);
        }
    }
    .alt2{
        max-width:100%;
    }
    .bottom{
        grid-template-columns:repeat(1,1fr);
        gap:2rem;
    }
    .info-cont{
        gap:2rem;
    }
    .product-cont{
        justify-content: space-between;
        gap:1rem;
        align-items:center;
    }
    .product-details{
        justify-content: space-between;
        align-items:center;
        gap:1rem;
    }
    .product-image{
        width:80px;
    }
    .details{
        justify-content: space-between;
        align-items:center;
        gap:1rem;
    }
    .detail{
        display:flex;
        gap:.25rem;
        align-items:center;
        span{
            font-weight: 700;
            color: var(--dark-text);
            text-transform:capitalize;
        }
    }
    .p-name{
            font-weight:600;
            color: var(--dark-text2);
            font-size:.85rem;
            font-family:var(--bdy-font-family-alt);
            text-transform:uppercase;
    }
    .id{
            font-weight: 600;
            font-size:.85rem;
            color: var(--dark-text2);
            font-family:var(--bdy-font-family-alt);
    }
    .size{
            font-weight: 600;
            font-size:.85rem;
            color: var(--dark-text2);
            font-family:var(--bdy-font-family-alt);
    }
    
    .color-info{
        gap:.5rem;
        align-items:center;
        span{
            font-weight: 600;
            font-size:.85rem;
            color: var(--dark-text2);
            font-family:var(--bdy-font-family-alt);
        }
        .color-img{
            width:15px;
            height:15px;
            border-radius: 50%;
        }
    }
    .price{
        font-weight: 700;
        font-size:1.25rem;
        color: var(--dark-text);
        font-family:var(--bdy-font-family-alt);
    }
    .price-details{
        justify-self:center;
        justify-items:center;
        align-items:center;
        gap:1rem;
    }
    .amount-container{
        justify-items:center;
        align-items:center;
        gap:.5rem;
    }
    .amount{
        width:30px;
        height:30px;
        align-items:center;
        justify-content:center;
        border-radius:10px;
        border: 1px solid var(--dark-text);
      }
      hr{
        border:none;
        background:var(--white-color2);
        height:1px;
      }
    .summary-cont{
        padding:1.5rem;
        height:50vh;
        gap:1rem;
        background:var(--white-color2);
    }
    .summary-item{
        display:flex;
        justify-content:space-between;
        align-items-center;
    }
    .summary-text{
        font-weight: 600;
        font-size:1rem;
        font-family:var(--bdy-font-family);
    }
    .summary-price{
        font-weight: 600;
        font-size:1rem;
        color: var(--dark-text2);
        font-family:var(--bdy-font-family-alt);
    }
    .total{
        font-weight: 700 !important;
        font-size:1.25rem !important;
    }


    @media (min-width:760px){
        .product-image{
            width:150px;
        }
        .bottom{
            grid-template-columns:2.5fr 1.5fr;
        }
    }
    @media (min-width:960px){
        .bottom{
            grid-template-columns:2.5fr 1.25fr;
        }
        .product-image{
            width:200px;
        }
        .product-cont{
            justify-content: none;
            gap:1rem;
            align-items:center;
        }
    }
`
export default Cart