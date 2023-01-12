import React from 'react'
import styled from 'styled-components'
import { FormControl, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();

  return (
    <Container className='flex'>
        <div className="wrapper grid">

            <div className="title">
                <div className="back">
                    <ArrowBack className="back-arrow" onClick={() => navigate(-1)}/>
                </div>
                <h1 className="page-title">CREATE AN ACCOUNT</h1>
            </div>

            <FormControl className='form grid'>
                <div className="name flex">

                <TextField
                    required
                    id="firstName"
                    label="Name"
                    variant="standard"
                    size="small"
                    className='input'
                />
                <TextField
                    required 
                    className='input'
                    id="lastName"
                    label="Last name"
                    variant="standard"
                    size="small"
                />

                </div>
                
                <TextField
                    required 
                    className='input'
                    id="email"
                    label="Email"
                    variant="standard"
                    size="small"
                />
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
                <TextField
                    required 
                    id="confirm-password"
                    className='input'
                    type="password"
                    label="Confirm password"
                    autoComplete="current-password"
                    variant="standard"
                    size="small"
                />

                <p className="agreement"> 
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <span>PRIVACY POLICY</span>
                </p>
                
                <button className="button">Create Account</button>

                <Link to='/sign-in' className='link'>SIGN IN</Link>

            </FormControl>

               
        </div>
    </Container>
  )
}
const Container = styled.div`
    justify-content:center;
    align-items:center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
    background-size: cover;

    .wrapper{
        width: 80%;
        padding: 1.5rem;
        background: var(--white-color);
    }
    .form{
        gap:.5rem;
    }
    .title .back{
        width:2rem;
        height:2rem;
    }
    .back-arrow{
        font-size:var(--font-size-m);
        color:var(--dark-text) ;
        transition:all .5s ease;
        :hover{
            transform:scale(1.1)
        }
    }
    .page-title{
        font-size:var(--h3-size);
        font-weight:700;
        text-align:center;
    }
    .name{
        gap:3rem;
    }
    .input{
        font-size:var(--font-size-sm) !important;
        color:var(--dark-text) !important;
    }
    .agreement{
        font-size:var(--font-size-sm);
        font-weight:500;
        text-align:center;
        color:var(--dark-text2);
        span{
            font-size:var(--font-size-sm);
            font-weight:700;
            color:var(--dark-text);
        }
    }
    .link{
        font-size:.65rem;
        font-weight:700;
        text-align:center;
        color:var(--dark-text2);
        font-family:var(--bdy-font-family-alt);
        margin-top:.15rem;
        :hover{
            color:var(--dark-text);
        }
    }
    .button{
        padding:.5rem;
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
            width: 40%;
        }
        .button{
            max-width:40%;
        }
    }
`
export default Register