import './App.scss';

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import { About, Home } from './pages';

export default function App() {
    return (
        <Router>
            <div>
                <nav className="primary-navigation">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">Company</Link>
                        </li>
                    </ul>
                </nav>

                <div className="main-content">
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>

                <footer>
                    <p>
                        Copyright &copy; {new Date().getFullYear()} KPG
                        Softworks, LLC. All rights reserved.
                    </p>
                </footer>
            </div>
        </Router>
    );
}
