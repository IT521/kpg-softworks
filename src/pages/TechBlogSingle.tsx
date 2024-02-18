import './pages.scss';

import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { blogPosts } from '../components/blog/data/blogPosts';
import { PostInterface } from '../components/blog/model';
import { Post } from '../components/blog/Post';

export function TechBlogSingle() {
    const { id } = useParams();
    const [post, setPost] = useState<PostInterface>();

    useEffect(() => {
        id &&
            setPost(
                blogPosts.find(
                    (item: PostInterface) => item.id.toString() === id
                )
            );
    }, [id]);

    return post ? (
        <main className="wrapper">
            <Helmet>
                <title>{post.title} | TechMavin | KPG Softworks</title>
                <meta
                    name="description"
                    content={`TechMavin | ${post.title}`}
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
            <section className="view-post">
                <Post post={post} />
            </section>
        </main>
    ) : null;
}
