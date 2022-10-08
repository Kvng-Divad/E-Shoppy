import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const NewsLetter = () => {
  return (
    <Container className='flex'>

        <h1 className="news-title">Newsletter</h1>
        <p className="news-desc">Get timely updates on your favourite products and our new products.</p>

        <div className="input-container flex">
            <input type="text" className="news-input" placeholder='Your email'/>
            <button className="btn-send flex">
                <Send/>
            </button>
        </div>
    </Container>
  )
}
const Container =  styled.div`
    height:60vh;
    background:var(--body-color);
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:1rem;

    .news-title{
        font-size:var(--font-size-bggr);
    }
    .news-desc{
        font-size:var(--font-size-m);
        font-weight:500;
        font-family:var(--bdy-font-family-alt);
        color:var(--dark-text2);
    }
    .input-container{
        width:45%;
        height:30px;
        background:var(--white-color);
        align-items:center;
        justify-content:space-between;
        border: 1px solid lightgray;
    }
    .news-input{
        flex:8;
        padding-left:1.25rem;
    }
    .btn-send{
        flex:1;
        height:100%;
        align-items:center;
        justify-content:center;
        background:var(--skin-color);
        color:var(--white-text);
        border:1px solid var(--skin-color);
        :hover{
            background:transparent;
            color:var(--dark-text2);
        }
    }
`


export default NewsLetter