import { useHistory } from "react-router";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";
import ApiConsumer from "../../Util/ApiConsumer";
import { useState, useEffect } from "react";
import './HeaderNav.scss'

const HeaderNav = () => {
    const history = useHistory();
    let [navAdmin, setNavAdmin] = useState();

    const logout = () => {
        Cookies.remove('auth');
        history.push('/');
    }

    const nav = [(
        <>
            <div className="enlace">
            <Link className="linksNav" activeClassName="activo" to="/newdate">Nueva Cita</Link>
            </div>
            <div className="enlace">
            <Link className="linksNav" activeClassName="activo" to="/datings">Todas las citas</Link>
            </div>
            <div className="enlace">
            <Link className="linksNav" activeClassName="activo" to="/mydates">Mis citas</Link>
            </div>
        </>),(
        <>
            <div className="enlace">
            <Link className="linksNav" activeClassName="activo" to="/newdate">Nueva Cita</Link>
            </div>
            <div className="enlace">
            <Link className="linksNav" activeClassName="activo" to="/mydates">Mis citas</Link>
            </div>
        </>)
    ];

    useEffect(async () => {
        let response = await ApiConsumer.validation();
        if(response.role === 'admin') setNavAdmin(true);
        else setNavAdmin(false);
    }, []);

    return(
        <div className="contenedorNavegacion">
            <div className="barraNavegacion">
                {navAdmin && nav[0]}
                {!navAdmin && nav[1]}
                <button className="logout" onClick={logout}><svg className="iconLogout" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M10 2v2h12v16h-12v2h14v-20h-14zm0 7.408l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7z"/></svg></button>
            </div>           
        </div>
    )
}

export default HeaderNav;