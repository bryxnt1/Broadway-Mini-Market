import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
          
        <Route path="/" exact component={Home}/>
          
          </Routes>

           </Router>
      
    </div>
  );
}

export default App;
