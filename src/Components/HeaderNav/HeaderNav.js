import { useHistory } from "react-router";
import Cookies from 'js-cookie';


const HeaderNav = () => {
    const history = useHistory();

    const logout = () => {
        Cookies.remove('auth');
        history.push('/');
    }
    return(
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default HeaderNav;