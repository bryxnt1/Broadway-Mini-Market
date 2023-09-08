import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={{}}/>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
