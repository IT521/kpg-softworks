import { PostInterface } from '../model';
import { post1001 } from './post1001';
import { post1002 } from './post1002';
import { post1003 } from './post1003';
import { post1004 } from './post1004';
import { post1005 } from './post1005';
import { post1006 } from './post1006';
import { post1007 } from './post1007';
import { post1008 } from './post1008';
import { post1009 } from './post1009';

export const blogPosts: Array<PostInterface> = [
    {
        id: 1001,
        title: 'How to Fix Error 404 Not Found: The requested URL was not found on this server.',
        content: post1001,
        date: '11/26/2022',
    },
    {
        id: 1002,
        title: "Typescript can't locate PDF files",
        content: post1002,
        date: '11/27/2022',
    },
    {
        id: 1003,
        title: 'React: How to Embed PDF Document in HTML Web Page',
        content: post1003,
        date: '11/27/2022',
    },
    {
        id: 1004,
        title: 'Fixing Node-Gyp Issues on Mac',
        content: post1004,
        date: '11/27/2022',
    },
    {
        id: 1005,
        title: 'Fixing Node-Gyp Issues on Windows',
        content: post1005,
        date: '11/27/2022',
    },
    {
        id: 1006,
        title: 'Get stale branches in Microsoft Azure DevOps',
        content: post1006,
        date: '11/28/2022',
    },
    {
        id: 1007,
        title: 'Delete stale branches in Microsoft Azure DevOps',
        content: post1007,
        date: '11/28/2022',
    },
    {
        id: 1008,
        title: 'Find the closest value in an array of values',
        content: post1008,
        date: '12/10/2022',
    },
    {
        id: 1009,
        title: 'Disabling GPU Acceleration in Cypress running in Docker',
        content: post1009,
        date: '12/10/2022',
    },
];
