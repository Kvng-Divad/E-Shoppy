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
                <div className="top flex">
                    <button className="button alt" onClick={() => navigate('/products')}>CONTINUE SHOPPING</button>
                    <div className="top-texts flex">
                        <p className="top-text">Shopping Bag (2)</p>
                        <p className="top-text">Your Wishlist (0)</p>
                    </div>
                    <button className="button">CHECKOUT NOW</button>
                </div>

                <div className="bottom grid">
                    <div className="info-cont">
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
                    </div>

                    <div className="summary-cont">

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
        padding: 1.5rem;
    }
    .top-texts{
        justify-content: space-between;
        align-items:center;
        gap:1rem;
    }
    .top-text{
        font-weight: 600;
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
    .bottom{
        grid-template-columns:repeat(1,1fr);
    }
    .info-cont{
    }
    .product-cont{
        
        align-items:center;
    }
    .product-details{
        justify-content: space-between;
        align-items:center;
        gap:1rem;
    }
    .product-image{
        width:200px;
    }
    .details{
        justify-content: space-between;
        align-items:center;
        gap:1rem;
    }
    .detail{
        display:flex;
        gap:.5rem;
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
        margin:auto;
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
    @media (min-width:960px){
        .bottom{
            grid-template-columns:2.5fr 1.5fr;
        }
    }
`
export default Cart