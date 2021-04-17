import './Home.css';
import Login from '../../Components/Login/Login.js';
import SingIn from '../../Components/SingIn/SingIn.js';
import AllDating from '../../Components/AllDating/AllDating.js';
import Footer from '../../Components/Footer/Footer.js';
import Header from '../../Components/Header/Header.js';
import NewDating from '../../Components/NewDating/NewDating.js';
import UserDating from '../../Components/UserDating/UserDating.js';


function Home() {
  return (
    <>
        <Header></Header>
        <Login></Login>
        <SingIn></SingIn>
        <AllDating></AllDating>
        <NewDating></NewDating>
        <UserDating></UserDating>
        <Footer></Footer>
    </>
  );
}

export default Home;