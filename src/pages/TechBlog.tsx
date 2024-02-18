import './pages.scss';

import { Helmet } from 'react-helmet-async';

import { Posts } from '../components/blog/Posts';

export function TechBlog() {
    return (
        <main className="wrapper">
            <Helmet>
                <title>TechMavin | KPG Softworks</title>
                <meta
                    name="description"
                    content="TechMavin | Explore our tech blog for insights, tutorials, and guides covering all aspects of web development."
                />
                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large"
                />
            </Helmet>
            <section className="hero blog">
                <h1>TechMavin</h1>
                <article>
                    <p>
                        Tech Blog: TypeScript, JavaScript, React, and Angular
                        Web Development
                    </p>
                </article>
            </section>
            <section>
                <Posts />
            </section>
        </main>
    );
}
