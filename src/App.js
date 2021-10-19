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

function App() {
  return (
    
      <Router>
        <Menubar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    
  );
}

export default App;
