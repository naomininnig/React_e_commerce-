import {  EmailOutlined, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'

const Container= styled.div
`
display:flex;
overflow-x:hidden;

${mobile({ flexDirection:"Column" })}
`
const Left= styled.div
`
flex:1;
display:flex;
flex-direction:column;
padding: 20px;

`

const Logo = styled.h1``
const Desc = styled.p
`
margin: 20px 0px;

`
const SocialContainer= styled.div
`
display:flex;

`
const SocialIcon = styled.div
`
width:40px;
height:40px;
border-radius:50%;
color:#fff;
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;

`
const Center= styled.div
`
flex:1;
padding:20px;
${mobile({display:"none"})}

`
const Title= styled.h3
`
margin-bottom:30px;
`

const List = styled.ul
`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-direction:column;
`

const ListItem = styled.li
`
margin-bottom:10px;
display:flex;
align-items:center;
`

const Right= styled.div
`
flex:1;
padding:20px;
`
const ContactItem = styled.div
`
margin-bottom:20px;
display:flex;
align-items:center;
`
const Payment = styled.img
`
width:70%;
height:40%;
object-fit:cover;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Soul Spice</Logo>
                <Desc>Nachdem wir mehrere Jahre in Großkonzernen gearbeitet haben, wollten wir selbst Verantwortung übernehmen: Deshalb gründeten wir eine zerne tun. Einseitiges Streben 
                </Desc>
            <SocialContainer>
            
                <SocialIcon style={{backgroundColor:"#3B5999"}}>
                    <Facebook />
                </SocialIcon>
                <SocialIcon style={{backgroundColor:"#E4405F"}}>
                    <Instagram />
                </SocialIcon>
                <SocialIcon style={{backgroundColor:"#55ACEE"}}>
                    <Twitter />
                </SocialIcon>
                <SocialIcon style={{backgroundColor:"#E60023"}}>
                    <Pinterest />
                 </SocialIcon>
            </SocialContainer>
            </Left>

            <Center>
              <Title>Links</Title>
              <List>
                  <ListItem>AGB</ListItem>
                  <ListItem>Datenschutz</ListItem>
                  <ListItem>Impressum</ListItem>
                  <ListItem>Versand</ListItem>
                  <Link to='/login'style={{ textDecoration: 'none', color:'black' }}>
                  <ListItem>My account</ListItem>
                  </Link>
                  <Link to='/cart'style={{ textDecoration: 'none', color:'black'}}>
                  <ListItem>Cart</ListItem>
                  </Link>
                  <ListItem>Wishlist</ListItem>
                  <Link to='/'style={{color:'black'}}>
                  <ListItem>Home</ListItem>
                  </Link>
              </List>
            </Center>
            <Right>
             <Title>Kontakt</Title>
             <ContactItem> <Room style={{marginRight:"10px"}}/>
                 Grunewaldstr.79 10781 Berlin
             </ContactItem>
             <ContactItem > <Phone style={{marginRight:"10px"}}/>
                 +49 0301234567
             </ContactItem>
             <ContactItem> <EmailOutlined style={{marginRight:"10px"}}/>
                 kontakt@soul-spice.de
             </ContactItem>
             <Payment src="./images/payment_icons_react.png"/>

            </Right>
        </Container>
    )
}

export default Footer
