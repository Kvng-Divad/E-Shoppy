import React from 'react'
import styled from 'styled-components'
import { FormControl, TextField } from '@mui/material'

const Register = () => {
  return (
    <Container>
        <div className="wrapper">

            <div className="title">
                <h1 className="page-title">CREATE AN ACCOUNT</h1>
            </div>

            <FormControl>

                <TextField
                    required
                    id="firstName"
                    label="Name"
                    variant="standard"
                    size="small"
                />
                <TextField
                    required
                    id="lastName"
                    label="Last name"
                    variant="standard"
                    size="small"
                />
                <TextField
                    required
                    id="email"
                    label="Email"
                    variant="standard"
                    size="small"
                />
                <TextField
                    required
                    id="username"
                    label="Username"
                    variant="standard"
                    size="small"
                />

                <TextField
                    id="password"
                    type="password"
                    label="Password"
                    autoComplete="current-password"
                    size="small"
                />
                <TextField
                    id="confirm-password"
                    type="password"
                    label="Confirm password"
                    autoComplete="current-password"
                    size="small"
                />

                <p className="agreement"> By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </p>
                
                <button className="">Create Account</button>

            </FormControl>

               
        </div>
    </Container>
  )
}
const Container = styled.div`

`
export default Register