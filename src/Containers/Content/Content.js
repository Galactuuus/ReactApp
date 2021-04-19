import React from 'react';    
import SignIn from '../../Components/SignIn/SignIn.js'
import SignUp from '../../Components/SignUp/SignUp.js';     
import AllDating from '../../Components/AllDating/AllDating.js'; 
import NewDating from '../../Components/NewDating/NewDating.js'
import UserDating from '../../Components/UserDating/UserDating.js'

const Content = () => {

    return (
        <>
            <AllDating></AllDating>
            <NewDating></NewDating>
            <UserDating></UserDating>
        </>
    );
}       
     
export default Content
        