import { useState , useContext } from "react"
import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import { mobile } from "../responsive"
import UserContext from '../Context/UserContext';

const Container = styled.div
`
width:100vw;
height:80vh;
background-size:cover;
display:flex;
align-items:center;
justify-content:center;
background: linear-gradient
(rgba(255,255,255,0.5),
rgba(255,255,255,0.5)) ,url("./images/spices-2548653_1920.jpg");
background-size:cover;
background-position:center;

`
const Wrapper = styled.div
`
padding:20px;
width:25%;
background-color:white;
opacity:90%;
${mobile({ width:"75%"})}
`
const Title = styled.h1
`
font-size:24px;
font-weight:300;
`
const Form = styled.form
`
display:flex;
flex-direction:column;
`
const Input = styled.input
`
flex:1;
min-width:40%;
margin:10px 0px;
padding:10px;
`

const Btn= styled.button
`
width:50%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;
`
const Link = styled.a
`
margin:5px 0px;
font-size:15px;
text-decoration:underline;
cursor:pointer;
`
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(false);
    const [loggedIn, setLogedIn] = useState(false);
    const {loginUser, state} = useContext(UserContext);

         const handleSubmit = (e) => {
             e.preventDefault()
             
             if (email !== '' && password !== '') {
            
              if (localStorage.getItem('users')) {
                const list = JSON.parse(localStorage.getItem('users'));
            
                const foundUser = list.filter(user => {
                    return user.email === email
                }) ;
                
                if (foundUser.length > 0) {
                   if(foundUser[0].password === password) {
                    console.log(foundUser[0]);
                    setLogedIn(true);
                    localStorage.setItem("loggedInUser", JSON.stringify(foundUser[0]))
                    loginUser(foundUser[0])
                   }
                   else {
                       console.log('fail');
                   }
                
                   } else {
                    console.log('user not found');
                }
                }   else {
                  const list  = []
                  list.push({email, password})
                  localStorage.setItem('users', JSON.stringify(list));
             }   
           }
         } 
        
    return (
       <>
       <Announcement />
            <Navbar />
       <Container>
            <Wrapper>
                
                <Title>Sign In</Title>
                {state.isAuthenticated ? 
                <h3>Start Shopping!</h3>  : 
                <Form onSubmit={handleSubmit}>
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
                    <Btn type="submit">Login</Btn>
                    <Link>Forgot Password ?</Link>
                    <Link>Create a new account</Link>
                </Form>
                
 }
            </Wrapper>
        </Container>
        <Newsletter />
            <Footer />
        </>
    )
}

export default Login




 