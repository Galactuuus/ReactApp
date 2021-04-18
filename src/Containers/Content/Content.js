import React from 'react';    
import Login from '../../Components/Login/Login.js'
import SignUp from '../../Components/SignUp/SignUp.js';     
import AllDating from '../../Components/AllDating/AllDating.js'; 
import NewDating from '../../Components/NewDating/NewDating.js'
import UserDating from '../../Components/UserDating/UserDating.js'

const Content = () => {

    return (
        <>
            <br></br>
            <br></br>
            <Login></Login>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <SignUp></SignUp>
            <AllDating></AllDating>
            <NewDating></NewDating>
            <UserDating></UserDating>
        </>
    );
}       
     
export default Content
        