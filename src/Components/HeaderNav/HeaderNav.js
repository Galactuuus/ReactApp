import { useHistory } from "react-router";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";

const HeaderNav = () => {
    const history = useHistory();

    const logout = () => {
        Cookies.remove('auth');
        history.push('/');
    }
    return(
        <div>
            <Link to="/newdate">Nueva Cita</Link>
            <Link to="/datings">Todas las citas</Link>
            <Link to="/mydates">Mis citas</Link>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default HeaderNav;