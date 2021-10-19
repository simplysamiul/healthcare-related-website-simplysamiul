import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menubar from './Component/Shared/Menubar/Menubar';
import Home from './Component/Home/Home/Home';

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
      </Router>
    
  );
}

export default App;
