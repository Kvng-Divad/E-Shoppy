import React ,{useState} from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Add, Remove } from '@mui/icons-material'





const Product = () => {

  const [color, setColor] = useState('');

    const handleChange = (event) => {
            setColor(event.target.value);
        };

    const [size, setSize] = useState("");

    const [quantity, setQuantity] = useState(1);
    const handleQuantity = (type) => {
      if (type === "dec") {
        quantity > 1 && setQuantity(quantity - 1);
      } else {
        setQuantity(quantity + 1);
      }
    };
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <div className="product-wrapper grid">
            <div className="img-container grid">
              <img className="product-img" src='https://i.Ibb.co/S6qMxwr/Jean.jpg' alt='img'/>
            </div>
            <div className="product-info flex">
              <h1 className="product-title">
                Denim Jumpsuit
              </h1>
              <p className="product-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, culpa voluptatum maiores voluptatem qui voluptatibus impedit 
                similique! Delectus consectetur eligendi saepe nisi nesciunt quaerat! Quibusdam officia odio deserunt voluptatibus fugit.
              </p>
              <p className="product-price">
                $ 20
              </p>

              <div className="filter-container">
                <div className="filter">
                  {/*<h1 className="filter-title">Color</h1>*/}
                  <FormControl >
                      <FormLabel id="Color" className="filter-title" >Color</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="Color"
                        name="filter-color"
                        value={color}
                        onChange={handleChange}
                      >
                        <FormControlLabel className="filter-item"  value="black" 
                        control={<Radio 
                          sx={{
                            '&.Mui-checked': {color: "black",},
                         }}/>
                        }
                         label="Black" />
                        <FormControlLabel className="filter-item"  value="blue"
                         control={<Radio 
                          sx={{
                            '&.Mui-checked': {color: "blue",},
                         }}/>
                        }
                         label="Blue" />
                        <FormControlLabel className="filter-item"  value="red" 
                        control={<Radio 
                          sx={{
                            '&.Mui-checked': {color: "red",},
                         }}/>
                        } 
                        label="Red" />
                      </RadioGroup>
                  </FormControl>
                </div>
              </div>

              <div className="filter-container">
                <div className="filter">
                  <FormControl>
                      <FormLabel id="Color" className="filter-title" >Size</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="Color"
                        name="filter-size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                      >
                        <FormControlLabel className="filter-item" value="XS" control={<Radio />} label="XS" />
                        <FormControlLabel className="filter-item" value="S" control={<Radio />} label="S" />
                        <FormControlLabel className="filter-item" value="M" control={<Radio />} label="M" />
                        <FormControlLabel className="filter-item" value="L" control={<Radio />} label="L" />
                        <FormControlLabel className="filter-item" value="XL" control={<Radio />} label="XL" />
                      </RadioGroup>
                  </FormControl>
                </div>
              </div>

              <div className="add-container grid">

                <div className="amount-container flex">
                    <Remove className="remove-btn" onClick={() => handleQuantity("dec")}/>
                    <span className="amount flex">{quantity}</span>
                    <Add className="remove-btn" onClick={() => handleQuantity("inc")}/>
                </div>

                <button className='btn'> Add to Cart </button>
              </div>

            </div>
        </div>
        <Footer/>
    </Container>
  )
}

const Container = styled.div`
  .product-wrapper{
    padding:3rem 1rem;
    grid-template-columns:1fr;
  }
  .img-container{
    width:100%;
    height:100%;
  }
  .product-img{
    width:100%;
    height:90vh;
    object-fit:cover;
  }
  .product-info{
    padding: 1rem;
    flex-direction: column;
    gap:1rem;
  }
  .product-title{
      font-size:var(--h1-size);
      font-weight:900;
      font-family: var(--bdy-font-family-alt4);
      color:var(--dark-text);
  }
  .product-desc{
      font-weight:500;
      font-family: var(--bdy-font-family);
      color:var(--dark-text2);
  }
  .product-price{
      font-size:var(--h1-size);
      font-weight:900;
      font-family: var(--bdy-font-family-alt);
      color:var(--dark-text);
  }
  .filter-title{
      font-weight: 700 !important;
      color:var(--dark-text) !important;
      font-family: var(--bdy-font-family) !important;
  }
  .filter-item{
      font-weight: 600 !important;
      color:var(--dark-text) !important;
      font-family: var(--bdy-font-family) !important;
  }
  .add-container{
    gap:1.5rem;
  }
  .amount-container{
    gap:1rem;
    align-items:center;
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
    .product-wrapper{
      padding:3rem;
      grid-template-columns:repeat(2,1fr);
    }
    .product-info{
      padding: 1rem 2.5rem;
    }
  }
`
export default Product