import './Home.css'
function Home() {
    //dentro del return hay que incluir los hijos con un props children
  return (
    <>
        <header className="header">Clinica Dental</header>
        <div>hola soy home</div>
        <footer className="footer">Hecho por Angel y Gabriel</footer>
    </>
  );
}

export default Home;