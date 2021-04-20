import { useHistory } from "react-router";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";
import ApiConsumer from "../../Util/ApiConsumer";
import { useState, useEffect } from "react";

const HeaderNav = () => {
    const history = useHistory();
    let [navAdmin, setNavAdmin] = useState();

    const logout = () => {
        Cookies.remove('auth');
        history.push('/');
    }

    const nav = [(
        <>
            <Link className="linksNav" to="/newdate">Nueva Cita</Link>
            <Link className="linksNav" to="/datings">Todas las citas</Link>
            <Link className="linksNav" to="/mydates">Mis citas</Link>
        </>),(
        <>
            <Link className="linksNav" to="/newdate">Nueva Cita</Link>
            <Link className="linksNav" to="/mydates">Mis citas</Link>
        </>)
    ];

    useEffect(async () => {
        let response = await ApiConsumer.adminValidation();
        if(response.role === 'admin') setNavAdmin(true);
        else setNavAdmin(false);
    }, []);

    return(
        <div>
            {navAdmin && nav[0]}
            {!navAdmin && nav[1]}

            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default HeaderNav;