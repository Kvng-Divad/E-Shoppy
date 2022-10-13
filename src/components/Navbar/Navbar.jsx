import TextField from '@mui/material/TextField';
import React,{useState} from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink , Link} from 'react-router-dom';
import {useNavigate} from "react-router";
import  { FaBars , FaTimes} from "react-icons/fa";



const Navbar = () => {
    const navigate = useNavigate();
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const reSize = () => {
      if(click === true) {
        setClick(!click)
    }
    }


  window.addEventListener("resize", reSize);
    return(
    <Container>
        <div className='Wrapper flex'>
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

              <NavLink className='navlink' to='/register'>Register</NavLink>
              <NavLink className='navlink' to='/sign-in'>sign In</NavLink>

              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon  color='action' onClick={() => navigate('/cart') }/>
              </Badge>

              <div className='toggler' onClick={handleClick}>
              {click ? (

                <FaTimes size={16} style={{color:"#000"}} />
                  ) : (

                  <FaBars size={16} style={{color:"#000"}}/>
                  )      
              }         

              </div>
            </div>



            <div className={click ? 'drop-menu grid  active' : 'drop-menu grid '}>

              <div className='toggler menu-toggler' onClick={handleClick}>
                {click ? (

                  <FaTimes size={16} style={{color:"#000"}} />
                    ) : (

                    <FaBars size={16} style={{color:"#000"}}/>
                    )      
                }         

              </div>

              <div className='menu-cont grid'>
                  <div className='searchinput flex'>
                    <TextField
                        hiddenLabel
                        id="search"
                        size="small"
                        variant="standard"
                      />
                      <FaSearch style={{color:'gray'}}/>
                    </div>

                    <NavLink className='navLink' to='/'>Home</NavLink>
                    <NavLink className='navLink' to='/cart'>Cart</NavLink>
                    <NavLink className='navLink' to='/register'>Register</NavLink>
                    <NavLink className='navLink' to='/sign-in'>sign In</NavLink>

                    <button className="btn altr" onClick={() => navigate('/products') }>SHOP NOW</button>

                </div>
            </div>
        </div>
    </Container>
  )
}


const Container = styled.div`
    height:70px;
    box-shadow:var(--box-shadow);

    .Wrapper{
        padding: 1.25rem 1rem;
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
      display:none;
    }
    .searchinput{
      align-items:center;
      border: .15rem solid lightgray;
      padding: 0.25rem 1rem;
      border-radius:3rem;
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
      display:none;
    }
    .toggler{
      position: relative;
      display:flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
  }
  .drop-menu{
      background-color: var(--body-color);
      gap:3rem;
      display: none;
      position: fixed;
      top:0;
      bottom:3rem;
      left: 0;
      right: 0;
      transition: all .5s ease;
      z-index:10;
      backdrop-filter:blur(5px);
      padding:2rem;
  }
  .drop-menu.active{
      display: block;
  }
  .menu-cont{
      justify-items: center;
      align-items:center;
      gap:2rem;
      margin-top:3rem;
  }
  .menu-toggler{
    justify-content:flex-start;
  }
  .navLink{
    font-family:var(--bdy-font-family-alt4);
    color:var(--dark-text);
    font-size:var(--font-size-nr);
    font-weight:900;
    text-transform:uppercase;
  }
    @media (min-width:760px){
      .Wrapper{
        padding: .75rem 3.5rem;
      }
      .search-input{
        display:flex;
      }
    }
    @media (min-width:960px){
      .toggler{
          display:none;
      }
      .navlink{
          display:flex;
      }

    }
`

export default Navbar