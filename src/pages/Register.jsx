
import { useState } from "react"
import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import { mobile } from "../responsive"

const Container = styled.div
`
width:100vw;
height:80vh;
display:flex;
align-items:center;
justify-content:center;
background: linear-gradient
(rgba(255,255,255,0.5),
rgba(255,255,255,0.5)) ,url("./images/masala-4096891_1920.jpg"),center;
background-size:cover;
`

const Wrapper = styled.div
`
padding:20px;
width:40%;
background-color:white;
opacity:90%;
${mobile({ heigth:"50%", width:"75%"})}
`
const Title = styled.h1
`
font-size:24px;
font-weight:300;
`
const Form = styled.form
`
display:flex;
flex-wrap:wrap;

`
const Input = styled.input
`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`
const Agreement= styled.span
`
font-size:12px;
margin:20px 0px;
`
const Btn= styled.button
`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
`

const Register = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [subscribe, setSubscribe] = useState(false);

    const handleSubmit = (e) => {
       e.preventDefault()
      
       if (confirm !== '') {
        setSubscribe(true);
         if (localStorage.getItem('createAcount')) {
         const list = JSON.parse(localStorage.getItem('createAcount'));
         list.push(email);
         localStorage.setItem('createAcount', JSON.stringify(list));
         }
         else {
         const list  = []
         list.push(email)
        localStorage.setItem('createAcount', JSON.stringify(list));
         }   
     }
    }


    return (
        <>
        <Announcement/>
        <Navbar />
        <Container>
            <Wrapper>
                <Title>Create an account</Title>
                { subscribe ?
                <h3>Your Account has been created!</h3>  :
                <Form onSubmit={handleSubmit}>
                    <Input placeholder="name"
                    type="text"  
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                    <Input placeholder="last name"
                    type="text"  
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}/>
                    <Input placeholder="username"
                    type="text"  
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}/>
                    <Input placeholder="email"
                     type="email"  
                     required
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}/>
                    <Input placeholder="password"
                    type="password"  
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                    <Input placeholder="confirm password"
                    type="password"  
                    required
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}/>

                    <Agreement>By creating an account, I cinsent to the processing of my personal data in accordance with the <b>Privacy Policy</b></Agreement>
                    <Btn type="submit">Create</Btn>
                </Form>
}
            </Wrapper>
        </Container>
        <Newsletter/>
        <Footer />
        </>
    )
}

export default Register



    
 

     
//         if (email !== '') {
//          setSubscribe(true);
//          if (localStorage.getItem('newsletter')) {
//              const list = JSON.parse(localStorage.getItem('newsletter'));
//              list.push(email);
//              localStorage.setItem('newsletter', JSON.stringify(list));
//          }
//          else {
//              const list  = []
//              list.push(email)
//              localStorage.setItem('newsletter', JSON.stringify(list));
//          }   
//         }
//     }

 
 