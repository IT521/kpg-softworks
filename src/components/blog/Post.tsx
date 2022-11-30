import { Accordion } from './Accordion';
import { PostInterface } from './model';

export const Post = ({
    post: { id, title, content },
    isExpanded,
    isAccordion = true,
}: {
    post: PostInterface;
    isExpanded: boolean;
    isAccordion?: boolean;
}) => {
    return (
        <Accordion
            id={id}
            title={title}
            content={content}
            isExpanded={isExpanded}
            isAccordion={isAccordion}
        />
    );
};
