import './AllDating.css';
import ApiConsumer from '../../Util/ApiConsumer.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';


function AllDating() {

  return (
    <>
      <Header/>
      <button onClick={ApiConsumer.allDating}>Holaaaa</button>
      <Footer/>
    </>
  );
}

export default AllDating;