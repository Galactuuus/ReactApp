import './Home.scss';
import Footer from '../../Components/Footer/Footer.js';
import Header from '../../Components/Header/Header.js';
import Content from '../Content/Content.js'
import { useHistory } from 'react-router';

function Home() {
  return (
    <>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
    </>
  );
}

export default Home;