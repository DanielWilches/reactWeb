/* eslint-disable no-unused-vars */
import './App.css';
import bandera from './assets/bandera.png'
import Biografia from './Biografia';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


function App() {

  const login = (

    <>
      <div className="container">
        <div className="container-img">
          <img src={bandera} />
        </div>
        <from className="container-from ">
          <input
            type="text"
            className="continer-form__Input"
            placeholder="nombre"
          />
          <input
            type="password"
            className="continer-form__Input"
            placeholder="Contraseña"
          />

          
        </from>

        <Router>
          <ul className="container-btns">
            <li >
              <Link  to="/Biografia">ingresar</Link>
            </li>
            <li >
              <Link to="/Biografia">registar usuario</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/Biografia"  ><Biografia /></Route>
          </Switch>
        </Router>
      </div>
{/*       <Biografia /> */}
    </>
  );

  return login;
}

export default App;
