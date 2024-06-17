import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// layout
import Navbar from './components/layout/Navbar';
// pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
