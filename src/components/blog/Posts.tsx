import './blog.scss';

import { blogPosts } from './data/blogPosts';
import { PostInterface } from './model';
import { Post } from './Post';

export const Posts = () => {
    const isExpandedIndex: number = blogPosts
        ? Math.floor(Math.random() * blogPosts.length)
        : 0;

    return (
        <div className="posts-container">
            {blogPosts &&
                blogPosts.map((post: PostInterface, index: number) => (
                    <Post
                        key={index}
                        post={post}
                        isExpanded={index === isExpandedIndex}
                    />
                ))}
        </div>
    );
};
