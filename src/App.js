import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/navigation';
import Footer from './components/footer';
import Home from './pages/homepage';
import Paintings from './pages/paintings';
import Stitch from './pages/cross-stitch';
import Coasters from './pages/coasters';
import Orders from './pages/orders';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
           <Route
          path='/paintings'
          element={<Paintings />}
        />
         <Route
          path='/cross-stitch'
          element={<Stitch />}
        />
         <Route
          path='/coasters'
          element={<Coasters />}
        />
         <Route
          path='/orders'
          element={<Orders />}
        />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
