import './pages.scss';

import { Posts } from '../components/blog/Posts';

export function TechBlog() {
    return (
        <main className="wrapper">
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
