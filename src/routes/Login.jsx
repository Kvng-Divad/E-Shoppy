import React from 'react'
import styled from 'styled-components'
import { FormControl, TextField } from '@mui/material'
const Login = () => {
  return (
    <Container>
        <div className="title">
            <FormControl>

                <TextField
                    required
                    id="filled-required"
                    label="Required"
                    defaultValue="Hello World"
                    variant="filled"
                />

                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />

            </FormControl>
        </div>
    </Container>
  )
}
const Container = styled.div`

`

export default Login