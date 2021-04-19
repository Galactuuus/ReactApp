import './Home.scss';
import Footer from '../../Components/Footer/Footer.js';
import Header from '../../Components/Header/Header.js';
import Content from '../Content/Content.js'
import { useHistory } from 'react-router';

function Home() {
  const history = useHistory();
  return (
    <>
        <Header></Header>
        <Content></Content>
        <br/><br/>
        <Footer></Footer>
    </>
  );
}

export default Home;