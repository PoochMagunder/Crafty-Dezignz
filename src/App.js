import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/navigation';
import Footer from './components/footer';
import Home from './pages/homepage';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
