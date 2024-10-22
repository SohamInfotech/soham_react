import Mainbody from './components/Mainbody';
import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>

      <Switch>
     
        
        <Route path="/register">
          <Register />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          <Mainbody />
        </Route>

        
        

      </Switch>


    </>
  );
}

export default App;
