import { useState } from 'react';

export const Accordion = ({
    id,
    title,
    content,
    isExpanded,
    isAccordion = true,
}: {
    id: number;
    title: string;
    content: string;
    isExpanded: boolean;
    isAccordion?: boolean;
}) => {
    const [isActive, setIsActive] = useState(isExpanded);

    const createMarkup = (content: string) => {
        return { __html: content };
    };

    return isAccordion ? (
        <div className="accordion" data-id={`kpg-accordion-${id}`}>
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
    ) : (
        <div className="accordion" data-id={`kpg-accordion-${id}`}>
            <div className="accordion-header">
                <div>{title}</div>
            </div>
            <div
                className="accordion-content"
                dangerouslySetInnerHTML={createMarkup(content)}
            ></div>
        </div>
    );
};
