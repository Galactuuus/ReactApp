import React from 'react';    
import './Content.scss'
import NewDating from '../../Components/NewDating/NewDating.js'
import Carrousel from '../../Components/Carrousel/Carrousel.js';
import {ImageRoutes} from '../../Components/ImageRoutes/ImageRoutes.js';

const Content = () => {

    return (
        <>
            <Carrousel slides= {ImageRoutes} />
            <NewDating></NewDating>
        </>
    );
}       
     
export default Content
        