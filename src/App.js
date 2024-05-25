import './App.css';
import Menu from './components/menu/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Login from './pages/Login';
import { UserProvider } from './components/UserContext'; // Import the UserProvider

function App() {
    return (
        <UserProvider> {/* Wrap app with UserProvider */}
            <section className="app">
                <header className="app-header">
                    <Menu />
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
        </UserProvider>
    );
}

export default App;
