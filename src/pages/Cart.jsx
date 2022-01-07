import { Add, Remove } from "@material-ui/icons"
import { useState } from "react"
import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import { mobile } from "../responsive"

const Container = styled.div`

`

const Wrapper = styled.div

`
padding:80px;
background: linear-gradient
(rgba(255,255,255,0.9),
rgba(255,255,255,0.9)) ,url("./images/masala-4096891_1920.jpg");
background-size:cover;
${mobile({ padding:"20px"})}

`
const Title = styled.h1
`
font-weight:400;
padding:20px;
`
const Top = styled.div
`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`

const TopButton = styled.button
`
padding:10px;
font-weight:600;
cursor:pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
color: ${props=>props.type === "filled" && "white"};
`

const TopTexts = styled.div
`
${mobile({ display:"flex", flexDirection:"column"})}
`
const TopText = styled.span
`
text-decoration: underline;
cursor:pointer;
margin:0px 10px;
${mobile({ marginBottom:"5px"})}
`
const Bottom = styled.div
`
display:flex;
justify-content: space-between;
${mobile({ flexDirection:"column"})}

`
const Info = styled.div
`
flex:3;
`

const Product = styled.div
`
display:flex;
justify-content:space-between;
${mobile({ flexDirection:"column"})}
`
const ProductDetail = styled.div
`
flex:2;
display:flex;
`
const Img = styled.img
`
width:200px;
`
const Detailes = styled.div
`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductSize = styled.span``
const PriceDetail = styled.div
`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`
const ProductAmountContainer = styled.div
`
display:flex;
align-items:center;
margin-bottom:20px;
`
const ProductAmount = styled.div
`
font-size:24px;
margin:5px;
${mobile({ margin:"5px 15px"})}
`

const ProductPrice = styled.div
`
font-size:28px;
font-weight:200;
${mobile({ marginBottom:"20px", fontSize:"24px"})}
`


const Hr = styled.hr
`
background-color: #A9A9A9;
border: none;
height:1px;
`
const Summary = styled.div
`
flex:1;
border: 1px solid lightgray;
border-radius:2px;
padding:20px;
height:50vh;

`
const SummaryTitle = styled.h1
`
font-weight:200
`
const SummaryItem = styled.div
`
margin: 30px 0px;
display:flex;
justify-content:space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``


const Cart = () => {
    const [counter, setCounter] = useState(1);

    const onInc = () => {setCounter(counter + 1)}
    const onDec = () => {setCounter(counter - 1)}

    const [counterTwo, setCounterTwo] = useState(1);

    const onIncTwo = () => {setCounterTwo(counterTwo + 1)}
    const onDecTwo = () => {setCounterTwo(counterTwo - 1)}

    const [counterThree, setCounterThree] = useState(1);

    const onIncThree = () => {setCounterThree(counterThree + 1)}
    const onDecThree = () => {setCounterThree(counterThree - 1)}


    return (
        <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
        <Title>Your Cart</Title>
            <Top>
            <TopButton>Continiue Shopping</TopButton>
            <TopTexts>
              <TopText>Shopping Cart(3)</TopText>
                <TopText>WishList</TopText>
                </TopTexts>
             <TopButton type="filled">Checkout</TopButton>
            </Top>
        <Bottom>
          <Info>
            <Product>
            <ProductDetail>
            <Img src="./images/soul_spice_smoked_paprika_shopify_2048.png"/>
            <Detailes>
            <ProductName><b>Product:</b>Green Umamai Bio</ProductName>
            <ProductId><b>ID:</b>9438478334</ProductId>
            <ProductSize><b>Size:</b>50g</ProductSize>
            </Detailes>
            </ProductDetail>
            <PriceDetail>
                <ProductAmountContainer>
                <button onClick={onDec} style={{border:'none', background:'none',cursor:'pointer'}}><Remove style={{marginTop:"1px"}}/></button>
                <ProductAmount>{counter}</ProductAmount>
               <button onClick={onInc} style={{border:'none', background:'none',cursor:'pointer'}}><Add style={{marginTop:"1px"}}/></button>
                </ProductAmountContainer>
                <ProductPrice></ProductPrice>
            </PriceDetail>
            </Product>
            <Hr />
            <Product>
            <ProductDetail>
            <Img src="/images/soul_spice_classic_louisiana_shopify_2048.png" />
            <Detailes>
            <ProductName><b>Product:</b>Green Umamai Bio</ProductName>
            <ProductId><b>ID:</b>9438478334</ProductId>
            <ProductSize><b>Size:</b>50g</ProductSize>
            </Detailes>
            </ProductDetail>
            <PriceDetail>
                <ProductAmountContainer>
                <button onClick={onDecTwo} style={{border:'none', background:'none',cursor:'pointer'}}><Remove style={{marginTop:"1px"}}/></button>
                <ProductAmount>{counterTwo}</ProductAmount>
               <button onClick={onIncTwo} style={{border:'none', background:'none',cursor:'pointer'}}><Add style={{marginTop:"1px"}}/></button>
                </ProductAmountContainer>
                <ProductPrice></ProductPrice>
            </PriceDetail>
            </Product>
            <Hr />
            <Product>
            <ProductDetail>
            <Img src="./images/soul_spice_sumach_shopify_2048.png" />
            <Detailes>
            <ProductName><b>Product:</b>Green Umamai Bio</ProductName>
            <ProductId><b>ID:</b>9438478334</ProductId>
            <ProductSize><b>Size:</b>50g</ProductSize>
            </Detailes>
            </ProductDetail>
            <PriceDetail>
                <ProductAmountContainer>
                <button onClick={onDecThree} style={{border:'none', background:'none',cursor:'pointer'}}><Remove style={{marginTop:"1px"}}/></button>
                <ProductAmount>{counterThree}</ProductAmount>
               <button onClick={onIncThree} style={{border:'none', background:'none',cursor:'pointer'}}><Add style={{marginTop:"1px"}}/></button>
                </ProductAmountContainer>
                <ProductPrice></ProductPrice>
            </PriceDetail>
            </Product>
            </Info>
            <Summary>
                <SummaryTitle>Order Summary</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice> 80 $</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice> 4.99 $</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice> -4.99 $</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice> 80 $</SummaryItemPrice>
                </SummaryItem>
            </Summary>
            </Bottom>
    </Wrapper>
    <Newsletter />
    <Footer /> 
    </Container>
    )
}

export default Cart
