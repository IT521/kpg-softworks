import './App.scss';

import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';

import {
    About,
    Home,
    Layout,
    NoMatch,
    TechBlog,
    TechBlogSingle,
} from './pages';

export default function App() {
    return (
        <div className="main">
            <HelmetProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="blog">
                            <Route index element={<TechBlog />} />
                            <Route path=":id" element={<TechBlogSingle />} />
                        </Route>
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                </Routes>
            </HelmetProvider>
        </div>
    );
}
