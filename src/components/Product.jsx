import React from 'react'
import styled from 'styled-components'
import {ShoppingCartOutlined ,FavoriteBorder, SearchOutlined} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Product = ({item}) => {
    const navigate = useNavigate();
  return (
    <Container className="flex" onClick={() => navigate('/product')}>
        <div className="product-circle"></div>
        <img src={item.img} alt="" className="product-img" />
        <div className="product-info flex">
            <div className="product-icon flex">
                <ShoppingCartOutlined/>
            </div>
            <div className="product-icon flex">
                <FavoriteBorder/>
            </div>
            <div className="product-icon flex">
                <SearchOutlined/>
            </div> 
        </div>  
    </Container>
  )
}

const Container = styled.div`
    width:100%;
    height:100%;
    padding: 3rem 1rem;
    background:var(--cont-color);
    box-shadow:var(--box-shadow);
    position:relative;
    justify-content:center;
    align-items:center;


    :hover .product-info{
        opacity:1;
    }

    .product-img{
        width:180px;
        height:200px;
        z-index:2;
    }
    .product-icon{
        padding:.5rem;
        border-radius:50%;
        background:var(--white-color);
        justify-content:center;
        align-items:center;
        transition:all .5s ease;
        
        :hover{
            background:var(--white-color2);
            transform:scale(1.1)
        }
    }
    .product-circle{
        width:210px;
        height:210px;
        border-radius:50%;
        background:var(--circle-color);
        position:absolute;
    }
    .product-info{
        position:absolute;
        opacity:0;
        top:0;
        left:0;
        justify-content:center;
        align-items:center;
        width:100%;
        gap:.5rem;
        height:100%;
        z-index:3;
        background:var(--gray-color);
       
    }
    @media (min-width:760px){
        .product-img{
            width:180px;
            height:220px;
        }
        .product-circle{
            width:220px;
            height:220px;
        }
      }
`
export default Product