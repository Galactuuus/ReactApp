import './UserDating.css';
import ApiConsumer from '../../Util/ApiConsumer.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';

function UserDating() {
  return (
    <>
      <Header/>
      <button onClick={ApiConsumer.userDating}>Hola</button>
      <Footer/>
    </>
  );
}

export default UserDating;