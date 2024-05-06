import './App.css';
import Menu from './components/menu/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Login from './pages/Login';

function App() {
    return (
  <section className="app">
  <header className="app-header">
  <Menu/>
  </header>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
  </section>
  );
 }
 export default App;
