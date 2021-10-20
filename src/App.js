import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menubar from './Component/Shared/Menubar/Menubar';
import Home from './Component/Home/Home/Home';
import Footer from './Component/Shared/Footer/Footer';
import About from './Component/About/About';
import Doctors from './Component/Doctors/Doctors';
import NotFound from './Component/NotFound/NotFound';
import ServiceDetails from './Component/Home/Services/ServiceDetails/ServiceDetails';
import Login from './Component/Register/Login/Login';
import AuthProvider from './Component/context/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Menubar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/doctors">
            <Doctors />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/details/:service">
            <ServiceDetails />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
      </AuthProvider>
    
  );
}

export default App;
