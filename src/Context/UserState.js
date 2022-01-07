import React , { useState} from 'react';
import UserContext from './UserContext';

function UserState(props) {
    const [ state , setState] = useState({
        user:null,
        error:null,
        isAuthenticated : false
    });

    const loginUser = (currentUser) => {
        setState({...state, user:currentUser , isAuthenticated:true})
    }
    // const fetchUser = ()=>{
    //     fetch('https://reqres.in/api/users/2')
    //        .then(response => response.json())
    //        .then(user=>  setState({...state , isAuthenticated:true , user:user.data}))
    // }
    const loadUser = ()=>{
        const userFromStorage = localStorage.getItem("loggedInUser")
            if(userFromStorage)
        {
            setState({...state , isAuthenticated:true , user:JSON.parse(userFromStorage)})  
        }        
    }
    const logout = ()=>{
        setState({...state , isAuthenticated:false , user:null})
    }

    return (
        <UserContext.Provider value={{ state,loginUser, loadUser, logout }}>
            { props.children}
        </UserContext.Provider>
    )
}

export default UserState