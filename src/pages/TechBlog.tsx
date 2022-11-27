import './pages.scss';

import { Posts } from '../components/blog/Posts';

export function TechBlog() {
    return (
        <main className="wrapper">
            <section className="hero blog">
                <h1>TechMavin</h1>
                <article>
                    <p>
                        TypeScript, JavaScript, Bash, React, and Angular
                        Software Development
                    </p>
                </article>
            </section>
            <section>
                <Posts />
            </section>
        </main>
    );
}
