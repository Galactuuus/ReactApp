import React from 'react';    
import './Content.scss'; 
import AllDating from '../../Components/AllDating/AllDating.js'; 
import NewDating from '../../Components/NewDating/NewDating.js';
import UserDating from '../../Components/UserDating/UserDating.js';
import Carrousel from '../../Components/Carrousel/Carrousel.js';
import {ImageRoutes} from '../../Components/ImageRoutes/ImageRoutes.js';
import SingleDating from '../../Components/SingleDating/SingleDating';


const Content = () => {

    return (
        <>
            <Carrousel slides= {ImageRoutes} />
            
            <NewDating></NewDating>
            <span className="titulo">single dating</span>
            <SingleDating 
                id={1} 
                date="2020/02/02" 
                dni="123c" 
                doctorID={2}
                status="programada"
                detail="ortodoncia"
            />
            <UserDating></UserDating>
            <AllDating></AllDating>
        </>
    );
}       
     
export default Content
        