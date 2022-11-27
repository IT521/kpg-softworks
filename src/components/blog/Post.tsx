import { Accordion } from './Accordion';

export const Post = ({
    post: { title, content, isExpanded },
    index,
}: {
    post: { title: string; content: string; isExpanded: boolean };
    index: number;
}) => {
    return (
        <Accordion title={title} content={content} isExpanded={isExpanded} />
    );
};
