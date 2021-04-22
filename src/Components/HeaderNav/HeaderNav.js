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
            </div>
            <div className="logout">
                <button onClick={logout}>Logout</button>
            </div>            
        </div>
    )
}

export default HeaderNav;