import { Link, Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <div>
            <nav className="primary-navigation">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Company</Link>
                    </li>
                    <li>
                        <Link to="/blog">TechMavin</Link>
                    </li>
                </ul>
            </nav>

            <div className="main-content">
                <Outlet />
            </div>

            <footer>
                <p>
                    &copy; {new Date().getFullYear()} KPG Softworks, LLC. All
                    rights reserved.
                </p>
            </footer>
        </div>
    );
}
