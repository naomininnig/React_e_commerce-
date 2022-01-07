import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'
import UserContext from '../Context/UserContext';


//nav bar container
const Container = styled.div 
`
height: 70px;
`;
const Wrapper = styled.div 
`
padding: 20px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: '5px 20px' })}
`
//searchbox + language
const Left = styled.div
`
flex: 1;
display:flex;
align-items:center;
${mobile({ flex: 2, justifyContent:"start"})}
`

const SearchContainer= styled.div
`
border: 1px solid lightgray;
display:flex;
align-items:center;
margin-left: 5px;
padding:5px;
`
const Input = styled.input
`
border:none;
${mobile({ width:"50px"})}
`

//logo
const Center = styled.div
`
flex: 1;
text-align:center;
`

const Logo = styled.h1 
`
font-size:28px;
font-weight:bold;
text-decoration: underline;
${mobile({ fontSize:"22px"})}
`
//shoping cart + login 
const Right = styled.div
`
flex: 1;
display:flex;
align-items:center;
justify-content: flex-end;
${mobile({flex: 2, justifyContent:"center"})}
`
const MenuItem = styled.div
`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({ fontSize:"14px" , marginLeft:"10px"})}
`

const Navbar = () => {
    
    const { state, logout ,loadUser} = useContext(UserContext)
    useEffect(()=>{
        loadUser();
    },[])
    const guestUser  =
        <>
        <Link to='/register'style={{ textDecoration: 'none', color:'black' }}>
           <MenuItem>Register</MenuItem>
       </Link>
        <Link to='/login'style={{ textDecoration: 'none', color:'black' }}>
           <MenuItem>Sign In</MenuItem>
        </Link>
      </>
      const authUser  =
      <>
      <a onClick={logout} style={{ textDecoration: 'none', color:'black' }}>
         <MenuItem>logout</MenuItem>
                   </a>
      </>
    
    return (
        <Container>
           <Wrapper>
               <Left>
                 <SearchContainer >
                     <Input placeholder='Search'/>
                     <Search style={{color:'gray', fontSize:'16px'}}/>
                 </SearchContainer>
               </Left>
               <Center>
               <Link to='/'style={{ textDecoration: 'none', color:'black' }}>
                   <Logo>Soul Spice</Logo>
                   </Link>
               </Center>
               <Right>
              {state.isAuthenticated ? authUser : guestUser}
               
                 <Link to='/cart'>
                   <MenuItem>
                   <Badge badgeContent={3} color="secondary">
                    <ShoppingCartOutlined />
                   </Badge>
                   </MenuItem>
                   </Link>
               </Right>
           </Wrapper>
        </Container>
        
    )
}

export default Navbar
