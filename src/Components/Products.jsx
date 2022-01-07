import React from 'react';
import styled from 'styled-components'
import {popularProducts} from "../data"
import Product from './product';
import { mobile } from '../responsive';


const Container = styled.div
`
display:flex;
padding: 20px;
flex-wrap:wrap;
justify-content:space-between;
${mobile({ })}
`;

const Title = styled.h1
`
font-size: 38px;
font-weight:400;
padding:20px;
text-align:center;
${mobile({ fontSize:"34px"})}
`
const Products = () => {
    return (
        <>
        <Title>Popular Products</Title>
        <Container>
           {popularProducts.map((item)=> (
               <Product item={item} key={item.id}/>
           ))}
        </Container>
        </>
    )
}

export default Products
