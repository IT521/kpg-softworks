import { PostInterface } from './model';

export const Post = ({
    post: { id, title, content },
}: {
    post: PostInterface;
}) => {
    const createMarkup = (content: string) => {
        return { __html: content };
    };

    return (
        <div className="post" data-id={`kpg-post-${id}`}>
            <div className="header">
                <div>{title}</div>
            </div>
            <div
                className="content"
                dangerouslySetInnerHTML={createMarkup(content)}
            ></div>
        </div>
    );
};
