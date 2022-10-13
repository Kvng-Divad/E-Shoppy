import React, {useState} from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useLocation, /*useNavigate */} from "react-router";


const ProductList = () => {

    const location = useLocation();
    //const navigate = useNavigate();
    const cat = location.pathname.split("/")[2];

    const [filter, setFilter] = useState('');

    const handleChange = (event) => {
            setFilter(event.target.value);
        };
    const [sort, setSort] = useState("newest");
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <div className="section-title">
            <h3>Dresses</h3>
        </div>
        <div className="filter-container flex">
            <div className="filter flex">
                <h3 className="filter-title">
                    Filter Products
                </h3>

                <FormControl sx={{ m: .5, minWidth: 70 }} size="small" >
                    <InputLabel id="filter-products"></InputLabel>
                    <Select
                        labelId="filter-products"
                        id="color"
                        value={filter}
                        onChange={handleChange}
                    >
                        <MenuItem value="color">
                        <p>Color</p>
                        </MenuItem>
                        <MenuItem value={'white'}>white</MenuItem>
                        <MenuItem value={'black'}>black</MenuItem>
                        <MenuItem value={'Red'}>Red</MenuItem>
                        <MenuItem value={'Blue'}>Blue</MenuItem>
                        <MenuItem value={'Yellow'}>Yellow</MenuItem>
                        <MenuItem value={'Green'}>Green</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ m: .5, minWidth: 50 }} size="small" >
                    <InputLabel id="filter-products"></InputLabel>
                    <Select
                        labelId="filter-products"
                        id="size"
                        value={filter}
                        onChange={handleChange}
                    >
                        <MenuItem value="size">
                        <p>Size</p>
                        </MenuItem>
                        <MenuItem value={'XS'}>XS</MenuItem>
                        <MenuItem value={'S'}>S</MenuItem>
                        <MenuItem value={'M'}>M</MenuItem>
                        <MenuItem value={'L'}>L</MenuItem>
                        <MenuItem value={'XL'}>XL</MenuItem>
                    </Select>
                </FormControl>

            </div>

            <div className="filter flex">
                <h3 className="filter-title">
                        Sort Products
                </h3>
                <FormControl sx={{ m: .5, minWidth: 60 }} size="small" >
                    <InputLabel id="sort-products"></InputLabel>
                    <Select
                        labelId="sort-products"
                        id="sort"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <MenuItem value={'Newest'}>Newest</MenuItem>
                        <MenuItem value={'asc)'}>Price (asc)</MenuItem>
                        <MenuItem value={'Price (dsc)'}>Price (dsc)</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
        <Products cat={cat} filters={filter} sort={sort} />
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

const Container = styled.div`
    .section-title{
        padding:.5rem 1.5rem;

        h3{
            font-size:var(--h2-size);
            font-weight:700;
        }
    }
    .filter-container{
        justify-content:space-between;
        padding:.25rem 1.5rem;
        flex-direction:column;
    }
    .filter{
        gap:.5rem;
        align-items:center;
    }
    .filter-title{
        font-weight:600;
        font-size:var(--font-size-nr);
        color:var(--dark-text2);
        font-family:var(--bdy-font-family-alt)
    }
    @media (min-width:500px){
        .filter-container{
            flex-direction:row;
        }
    }
    @media (min-width:760px){
        .filter-title{
            font-size:var(--h3-size);
        }
    }
    @media (min-width:960px){
        .input-container{
            width:45%;
        }
    }


`
export default ProductList