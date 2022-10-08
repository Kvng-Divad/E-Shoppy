import TextField from '@mui/material/TextField';
import React from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink , Link} from 'react-router-dom';




const Navbar = () => {
  return (
    <Container>
        <div className='wrapper flex'>
            <div className='nav-left flex'>
              <span> EN </span>
              <div className='search-input flex'>
              <TextField
                  hiddenLabel
                  id="search"
                  size="small"
                  variant="standard"
                />
                <FaSearch style={{color:'gray'}}/>
              </div>
            </div>
            <div className='nav-center flex'>
              <Link to='/' className='logo'>E<span>-Shoppy</span></Link>
            </div>
            <div className='nav-right flex'>

              <NavLink className='navlink' to=''>Register</NavLink>
              <NavLink className='navlink' to=''>sign In</NavLink>

              <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon  color='action'/>
              </Badge>

              
            </div>
        </div>
    </Container>
  )
}


const Container = styled.div`
    height:60px;

    .wrapper{
        padding: .75rem 3.5rem;
        justify-content: space-between;
        align-items: center;
    }
    .nav-left{
      width:32%;
      justify-content: flex-start;
      gap:1.5rem;
      align-items: center;
    }
    .nav-center{
      width:32%;
      justify-content: center;
      align-items: center;
    }
    .nav-right{
      width:32%;
      justify-content: flex-end;
      align-items: center;
      gap:1rem;
      cursor:pointer;
    }
    .search-input{
      align-items:center;
      border: .15rem solid lightgray;
      padding: 0.25rem 1rem;
      border-radius:3rem;
    }
    .searchinput{
      position: relative !important;
      font-size:.85rem !important;
      color:var(--dark-text2) !important;
    }
    .logo{
      font-size:var(--h2-size);
      font-weight:700;
      font-family: var(--bdy-font-family-alt);
      color:var(--dark-text);
       span{
        font-size:var(--h3-size);
        font-weight:600;
        font-family: var(--bdy-font-family-alt4);
        color:var(--dark-text2)
      }
    }
    .navlink{
      font-family: var(--bdy-font-family-alt4);
      color:var(--dark-text);
      font-size:var(--font-size-sm);
      text-transform:uppercase;
    }
`

export default Navbar