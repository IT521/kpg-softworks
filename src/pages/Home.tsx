import './pages.scss';

import { Link } from 'react-router-dom';

export function Home() {
    return (
        <main className="wrapper">
            <section className="hero">
                <h1>Need code?</h1>
                <article>
                    <p>
                        <strong>KPG Softworks</strong>, based in Atlanta,
                        Georgia, was established in 2005 and has since been
                        offering small and large organizations high-quality full
                        stack software development.
                    </p>
                </article>
            </section>
            <section className="widgets" id="widgets">
                <ul>
                    <li>
                        <figure>
                            {/* Photo by Ferenc Almasi on Unsplash */}
                            <img
                                src="https://images.unsplash.com/photo-1581276879432-15e50529f34b"
                                alt="React Router"
                            />
                            <figcaption>
                                <h3>Web Development</h3>
                            </figcaption>
                        </figure>
                        <p>
                            We develop and test web applications and websites
                            using TypeScript, JavaScript, HTML, CSS/SASS,
                            Angular, React, Node, Cypress, WordPress
                        </p>
                        <Link to="/about">Development</Link>
                    </li>
                    <li>
                        <figure>
                            {/* Photo by Christopher Robin Ebbinghaus on Unsplash */}
                            <img
                                src="https://images.unsplash.com/photo-1527427337751-fdca2f128ce5"
                                alt="Javascript"
                            />
                            <figcaption>
                                <h3>Web Content Management</h3>
                            </figcaption>
                        </figure>
                        <p>
                            We provide technical expertise of best in class web
                            content management systems (WCMS) such as SDL
                            Tridion, Sitecore, and ADAM
                        </p>
                        <Link to="/about">Content</Link>
                    </li>
                    <li>
                        <figure>
                            {/* Photo by Pankaj Patel on Unsplash */}
                            <img
                                src="https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19"
                                alt="cascading style sheets"
                            />
                            <figcaption>
                                <h3>UX Engineering</h3>
                            </figcaption>
                        </figure>
                        <p>
                            Collaborate with researchers, designers,
                            programmers, and other professionals to create and
                            execute a successful User Experience
                        </p>
                        <Link to="/about">Engineering</Link>
                    </li>
                </ul>
            </section>
        </main>
    );
}
