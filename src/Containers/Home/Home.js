import './Home.scss';
import Footer from '../../Components/Footer/Footer.js';
import Header from '../../Components/Header/Header.js';
import Content from '../Content/Content.js'

function Home() {
  return (
    <div className="app">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
    </div>
  );
}

export default Home;