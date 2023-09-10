import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
          <Routes>
          <Route>
        <Route path='/' exact component={{Home}}/>
          </Route>
          </Routes>
           </Router>
      
    </div>
  );
}

export default App;
