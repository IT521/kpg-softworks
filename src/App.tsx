import './App.scss';

import { Route, Routes } from 'react-router-dom';

import { About, Home, Layout, NoMatch, TechBlog } from './pages';

export default function App() {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="blog" element={<TechBlog />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
}
