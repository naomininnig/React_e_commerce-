import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const Info = styled.div
`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color: rgba(0,0,0,0.2);
z-index:3;
display:flex;
justify-content:center;
align-items:center;
transition: all 1s ease;
cursor:pointer;
`;

const Container = styled.div
`
flex:1;
margin:5px;
min-width: 280px;
height: 350px;
display:flex;
align-items:center;
justify-content:center;
background-color:#F5F5F5;
position:relative;

&:hover ${Info}{
  opacity:1;
}
`;

const Img = styled.img
`
height:75%;
z-index:2;
`

const Icon = styled.div
`
width:40px;
height:40px;
border-radius:50%;
background-color:#fff;
display:flex;
justify-content:center;
align-items:center;
margin:5px;
margin-top:50px;
transition: all 1s ease;

&:hover{
    background-color: teal;
    transform: scale(1.1);
}

`

const Product = ({item}) => {
    return (
        
        <Container>
           <Img src={item.img}/>
           <Info>
              <Icon>
                  <ShoppingCartOutlined />
              </Icon> 
              <Icon>
                  <Link to={`/product/${item.id}`}>
                  <SearchOutlined />
                  </Link>
              </Icon>
              <Icon>
                  <FavoriteBorderOutlined />
              </Icon>
           </Info>
        </Container>
       
    )
}

export default Product