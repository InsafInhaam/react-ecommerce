import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import ProductList from './ProductList';
import Product from './Product';
import Register from './Register';
import Login from './Login';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Title = styled.h1`
  font-size:40px;
  margin:20px;
  text-align:center;
  ${mobile({ fontSize: "40px"})}
`;

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar />
            <Slider />
            <Categories />
                <Title>Products</Title>
            <Products />
            <Newsletter />
            <Footer/>     
        </div>
    )
}

export default Home