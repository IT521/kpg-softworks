import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Accordion = ({
    id,
    title,
    content,
    isExpanded = false,
}: {
    id: number;
    title: string;
    content: string;
    isExpanded?: boolean;
}) => {
    const [isActive, setIsActive] = useState(isExpanded);

    const createMarkup = (content: string) => {
        return { __html: content };
    };

    return (
        <div className="accordion" data-id={`kpg-accordion-${id}`}>
            <div
                className="accordion-header"
                onClick={() => setIsActive(!isActive)}
            >
                <div>{title}</div>
                <div className="accordion-button">{isActive ? '-' : '+'}</div>
            </div>
            {isActive && (
                <div className="accordion-content">
                    <div dangerouslySetInnerHTML={createMarkup(content)}></div>
                    <div className="accordion-link">
                        <Link to={`/blog/${id}`}>View</Link>
                    </div>
                </div>
            )}
        </div>
    );
};
