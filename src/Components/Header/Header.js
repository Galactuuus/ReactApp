import './Header.css';
import './Header.scss';

function Header() {

  return (
    <header className="header">
      <img src="https://i.pinimg.com/originals/bb/d4/8a/bbd48a94f349aa9687d0b6a2b55d2c67.png"></img>
      <div className="buttons">
        <button className="signin">Identifícate</button>
        <button className="signup">Regístrate</button>
      </div>
    </header>
  );
}

export default Header;
