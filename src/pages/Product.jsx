import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import Footer from "../Components/Footer"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { popularProducts } from "../data"


const Container = styled.div
`

`
const Wrapper = styled.div
`
padding: 50px;
display:flex;
${mobile({ flexDirection:"column", padding:"10px"})}
`
const ImgContainer = styled.div
`
flex:1;
`
const Img = styled.img
`
width:90%;
height:90vh;
object-fit:cover;
${mobile({ height:"40vh"})}
`
const InfoContainer = styled.div
`
flex:1;
padding: 0px 50px;
margin-top:200px;
${mobile({ padding:"10px", marginTop:"10px"})}
`
const Title = styled.div
`
font-weight:400;
font-size:20px;
`
const Desc = styled.p
`
margin:20px 0px;
font-weight:300;

`
const Price = styled.span
`
font-weight:100px;
font-size:20px;
`

const FilterContainer= styled.div
`
width: 50%;
margin:30px 0px;
display:flex;
justify-content:space-between;
${mobile({ width:"100%"})}
`
const Filter= styled.div
`
display:flex;
align-items:center;

`
const FilterTitle= styled.span
`
font-size:20px;
font-weight:200;
`

const FilterSize= styled.select
`
margin-left:10px;
padding:5px;
border-radius:10px;
border:1px solid teal;
background-color:white;
`
const FilterSizeOption= styled.option``

const AddContainer= styled.div
`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({ width:"100%"})}
`
const AmountContainer= styled.div
`
display:flex;
font-weight:700;
`
const Amount= styled.span
`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin: 5px;
`
const Btn= styled.button
`
padding:15px;
border-radius:10px;
border:2px solid teal;
background-color:white;
cursur:pointer;
font-weight:500;
cursor:pointer;

&:hover{
    background-color:#f8f4f4;
}
`


const Product = () => {

    const [counter, setCounter] = useState(1);
    const onInc = () => {setCounter(counter + 1)}
    const onDec = () => {setCounter(counter - 1)}
    
    const {id} = useParams();
    console.log(id);
    const [selectedProduct]  = popularProducts.filter(product=> product.id == id)
  console.log(selectedProduct);
    return (
        <Container>
        <Announcement />
        <Navbar />
        {selectedProduct ? 
        <Wrapper>
          <ImgContainer>
            <Img src={selectedProduct.img} /> 
          </ImgContainer>
          <InfoContainer>
          <Title>{selectedProduct.title}</Title>
          <Desc>{selectedProduct.desc}</Desc>
          <Price>{selectedProduct.price}</Price>
          <FilterContainer>
          <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                <FilterSizeOption>25 g</FilterSizeOption>
                <FilterSizeOption>50 g</FilterSizeOption>
                </FilterSize>
          </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
                
               <button onClick={onDec} style={{border:'none', background:'none',cursor:'pointer'}}><Remove style={{marginTop:"1px"}}/></button>
               
               <Amount>{ counter }</Amount>
               <button onClick={onInc} style={{border:'none', background:'none',cursor:'pointer'}}><Add style={{marginTop:"1px"}}/></button>
            </AmountContainer>
             <Btn>Add to Cart</Btn>
                </AddContainer>
                </InfoContainer>
            </Wrapper>
         :  <h3>product not found</h3> }
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product

