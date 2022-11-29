import './blog.scss';

import { blogPosts } from './data/blogPosts';
import { Post } from './Post';

export const Posts = () => {
    return (
        <div className="posts-container">
            {blogPosts &&
                blogPosts.map((post, index) => (
                    <Post key={index} post={post} index={index} />
                ))}
        </div>
    );
};
