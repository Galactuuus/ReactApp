import React from 'react';    
import './Content.scss'; 
import Carrousel from '../../Components/Carrousel/Carrousel.js';
import {ImageRoutes} from '../../Components/ImageRoutes/ImageRoutes.js';


const Content = () => {

    return (
        <>
            <Carrousel slides= {ImageRoutes} />
        </>
    );
}       
     
export default Content
        