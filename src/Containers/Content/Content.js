import React from 'react';    
import './Content.scss'
import SignIn from '../../Components/SignIn/SignIn.js'
import SignUp from '../../Components/SignUp/SignUp.js';     
import AllDating from '../../Components/AllDating/AllDating.js'; 
import NewDating from '../../Components/NewDating/NewDating.js'
import UserDating from '../../Components/UserDating/UserDating.js'
import Carrousel from '../../Components/Carrousel/Carrousel.js';
import {ImageRoutes} from '../../Components/ImageRoutes/ImageRoutes.js';

const Content = () => {

    return (
        <>
            <Carrousel slides= {ImageRoutes} />
            <AllDating></AllDating>
            <NewDating></NewDating>
            <UserDating></UserDating>
        </>
    );
}       
     
export default Content
        