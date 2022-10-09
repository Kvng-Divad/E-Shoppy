import React from 'react'
import styled from 'styled-components'
import { FormControl, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <Container className='flex'>
        <div className="wrapper grid">

            <div className="title">
                <h1 className="page-title">SIGN IN</h1>
            </div>

            <FormControl className='form grid'>

                <TextField
                    required 
                    className='input'
                    id="username"
                    label="Username"
                    variant="standard"
                    size="small"
                />

                <TextField
                    required 
                    id="password"
                    className='input'
                    type="password"
                    label="Password"
                    variant="standard"
                    autoComplete="current-password"
                    size="small"
                />

                <button className="button">Sign In</button>

                <Link to='' className='link'>DO YOU NOT REMEMBER THE PASSWORD?</Link>
                <Link to='/register' className='link'>CREATE A NEW ACCOUNT</Link>

            </FormControl>
        </div>
    </Container>
  )
}
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
    background-size: cover;
    align-items: center;
    justify-content: center;
    .wrapper{
        width: 75%;
        padding: 1.5rem;
        background: var(--white-color);
    }
    .form{
        gap:1rem;
    }
    .page-title{
        font-size:var(--h3-size);
        font-weight:700;
        text-align:center;
    }
    .input{
        font-size:var(--font-size-sm) !important;
        color:var(--dark-text) !important;
    }
    .link{
        font-size:.65rem;
        font-weight:700;
        text-align:center;
        color:var(--dark-text2);
        font-family:var(--bdy-font-family-alt);
        :hover{
            color:var(--dark-text);
        }
    }
    .button{
        padding:.25rem .75rem;
        text-align:center;
        font-weight: var(--font-semibold);
        color: var(--white-text);
        text-transform: uppercase;
        cursor: pointer;
        background:var(--skin-color);
        border: 1px solid var(--skin-color);
        box-shadow: var(--box-shadow);
        max-width:80%;
        margin:auto;
        :hover{
            background:transparent;
            color:var(--dark-text);
        }
    }
    @media (min-width:960px){
        .wrapper{
            width: 30%;
        }
        .button{
            max-width:40%;
        }
    }
`

export default Login