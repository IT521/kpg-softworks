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

import { useEffect } from 'react';

import { PostInterface } from './model';

export const Post = ({
    post: { id, title, content },
}: {
    post: PostInterface;
}) => {
    const createMarkup = (content: string) => {
        return { __html: content };
    };

    useEffect(() => {
        Prism.highlightAll();
    }, [id]);

    return (
        <div className="post" data-id={`kpg-post-${id}`}>
            <div className="header">
                <h2>{title}</h2>
            </div>
            <div
                className="content"
                dangerouslySetInnerHTML={createMarkup(content)}
            ></div>
        </div>
    );
};
