import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-basic';
// import prism-toolbar before prism-copy-to-clipboard
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/filter-highlight-all/prism-filter-highlight-all';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/plugins/show-language/prism-show-language';

import { useEffect, useState } from 'react';
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

    useEffect(() => {
        if (isActive) {
            Prism.highlightAll();
        }
    }, [id, isActive]);

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
