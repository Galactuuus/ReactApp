import './Home.css';
import Login from '../Login/login.js';
function Home(props) {
  return (
    <>
        <header className="header">Clinica Dental</header>
        <div>hola soy home</div>
        <Login></Login>
        <footer className="footer">Hecho por Angel y Gabriel</footer>
    </>
  );
}

export default Home;