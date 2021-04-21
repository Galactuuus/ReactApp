import React from 'react';    
import './Content.scss'; 
import Carrousel from '../../Components/Carrousel/Carrousel.js';
import {ImageRoutes} from '../../Components/ImageRoutes/ImageRoutes.js';


const Content = () => {

    return (
        <div className="main">
            <Carrousel slides= {ImageRoutes} />
        </div>
    );
}       
     
export default Content
        