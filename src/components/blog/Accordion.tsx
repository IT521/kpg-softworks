import './Accordion.scss';

import { useState } from 'react';

export const Accordion = ({
    title,
    content,
    isExpanded = false,
}: {
    title: string;
    content: string;
    isExpanded?: boolean;
}) => {
    const [isActive, setIsActive] = useState(isExpanded);

    const createMarkup = (content: string) => {
        return { __html: content };
    };

    return (
        <div className="accordion">
            <div
                className="accordion-header"
                onClick={() => setIsActive(!isActive)}
            >
                <div>{title}</div>
                <div className="accordion-button">{isActive ? '-' : '+'}</div>
            </div>
            {isActive && (
                <div
                    className="accordion-content"
                    dangerouslySetInnerHTML={createMarkup(content)}
                ></div>
            )}
        </div>
    );
};
