import './blog.scss';

import { Accordion } from './Accordion';
import { blogPosts } from './data/blogPosts';
import { PostInterface } from './model';

export const Posts = () => {
    const isExpandedIndex: number = blogPosts
        ? Math.floor(Math.random() * blogPosts.length)
        : 0;

    return (
        <div className="posts-container">
            {blogPosts &&
                blogPosts.map((post: PostInterface, index: number) => {
                    const { id, title, content } = post;
                    return (
                        <Accordion
                            key={id}
                            id={id}
                            title={title}
                            content={content}
                            isExpanded={index === isExpandedIndex}
                        />
                    );
                })}
        </div>
    );
};
