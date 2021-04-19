import './Header.css';
import './Header.scss';
import {useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import HeaderForm from '../HeaderForm/HeaderForm';
import HeaderNav from '../HeaderNav/HeaderNav';
import Cookies from 'js-cookie';



function Header() {
  const history = useHistory();
  let [Logged, setLogged] = useState();

  useEffect(() => {
    if(Cookies.get('auth')) { Logged = true }
    else { Logged = false; }
    console.log(Logged);
  }, [])

  const homeRedirect = () => {
    history.push('/');
  }

  return (
    <header className="header">
      <img src="https://i.pinimg.com/originals/bb/d4/8a/bbd48a94f349aa9687d0b6a2b55d2c67.png" onClick={homeRedirect}></img>
      {!Logged && <HeaderForm/>}
      {Logged &&  <HeaderNav/>}
    </header>
  );
}

export default Header;
