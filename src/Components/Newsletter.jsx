import React from "react"
import { Send } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"
import { useState } from "react"


const Container = styled.div
`
height:40vh;
background-color: #F5F5F5;
display:flex;
align-items:center;
justify-content:center;
flex-direction: column;
${mobile({ height:"40vh"})}
`
const Title = styled.h1
`
font-size:50px;
margin-bottom: 20px;
${mobile({ fontSize: '38px'})}
`
const Description  = styled.div
`
font-size: 24px;
font-weight: 300;
margin-bottom:20px;
${mobile({ textAlign:"center", fontSize: '20px'})}
`
const Form = styled.form
`
 width:30%;
 height:40px;
 background-color: #fff;
 display:flex;
 justify-content:space-between;
 border:1px solid lightgray;
 ${mobile({ width:"80%"})}
`
const Input= styled.input
`
border:none;
flex:7;
padding-left:20px;
`
const Button = styled.button
`
flex:1;
border:none;
background-color: teal;
color: #fff;
cursor:pointer;
`


const Newsletter = () => {
   const [email, setEmail] = useState('');
   const [subscribe, setSubscribe] = useState(false);

   const handleSubmit = (e) => {
       e.preventDefault()
    
       if (email !== '') {
        setSubscribe(true);
        if (localStorage.getItem('newsletter')) {
            const list = JSON.parse(localStorage.getItem('newsletter'));
            list.push(email);
            localStorage.setItem('newsletter', JSON.stringify(list));
        }
        else {
            const list  = []
            list.push(email)
            localStorage.setItem('newsletter', JSON.stringify(list));
        }   
       }
   }

    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get the latest updates on your favourite spices</Description>
            {subscribe ? 
            <h3>Thanks for subscribing</h3>  : 
            <Form onSubmit={handleSubmit}>
             <Input 
             type="email"  
             required
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             />
             <Button type="submit" >
                 <Send />
             </Button>
            </Form>
}
        </Container>
    )
}


export default Newsletter


