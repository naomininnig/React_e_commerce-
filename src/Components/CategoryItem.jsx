import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'


const Container = styled.div
`
flex: 1;
margin:3px;
height:60vh;
position:relative;
`
const Img = styled.img
`
width: 100%;
height:100%;
object-fit: cover;
margin-left: 50px;
${mobile({ maxHeight:"40vh", maxWidth:"80%", display:"block", paddingLeft:"50px"})}
`

const Info = styled.div
`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`
const Title = styled.h1
`
color:#fff;
margin-bottom:15px;
background:rgb(3, 90, 90);
opacity:85%;
padding:5px;
border-radius:10px;
font-size:26px;
font-weight:500;
${mobile({ fontSize:"20px" })}
&:hover {
  opacity:1;
  

`
const BtnItem = styled.button
`
padding:5px;
color:#F5F5F5;
font-size:12px;
background-color: rgb(3, 90, 90);
opacity:90%;
cursor:pointer;
font-weight:600;
border-radius:5px;

&:hover {
  opacity:1;
  padding:10px;
  transition: all 0.5s ease;
`;

const CategoryItem = ({item}) => {
        return (
            <Container>
              <Link to={`/products/${item.cat}`}>
                <Img src={item.img} />
                <Info>
                  <Title>{item.title}</Title>
                  <BtnItem>SHOP NOW</BtnItem>
                </Info>
              </Link>
            </Container>
    )
}

export default CategoryItem

