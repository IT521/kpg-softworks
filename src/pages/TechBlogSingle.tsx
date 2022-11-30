import './pages.scss';

import { useEffect, useState } from 'react';
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
            <section className="hero blog">
                <h1>TechMavin</h1>
                <article>
                    <p>
                        Tech Blog: TypeScript, JavaScript, Bash, React, and
                        Angular Software Development
                    </p>
                </article>
            </section>
            <section className="view-post">
                <Post post={post} isExpanded={false} isAccordion={false} />
            </section>
        </main>
    ) : null;
}
