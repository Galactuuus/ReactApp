import './App.css';
import Home from './Containers/Home/Home.js';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn.js';
import SignUp from './Components/SignUp/SignUp.js'

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SignIn} exact />
          <Route path="/signup" component={SignUp} exact />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
