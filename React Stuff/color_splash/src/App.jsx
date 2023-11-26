import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home.jsx';
import Color from './Color/Color.jsx';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/color">Color</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/color" element={<Color />} />
        </Routes>

      </Router>
    </div>
   
  );
}
export default App;
