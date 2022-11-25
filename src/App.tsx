import './App.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { About, Home, Layout, NoMatch } from './pages';

export default function App() {
    return (
        <Router>
            <div className="main">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}
