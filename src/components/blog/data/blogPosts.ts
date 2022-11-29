import { deleteStaleBranches } from './deleteStaleBranches';
import { getStaleBranches } from './getStaleBranches';

export const blogPosts = [
    {
        title: 'How to Fix Error 404 Not Found: The requested URL was not found on this server.',
        content: `For URLs on the <i>client-side</i>, <b>React Router</b> or <b>Angular Router</b> will do the routing for you, but they fail on the <i>server-side</i> unless you make your server understands them by ensuring that your URLs reach your router. This is done by redirecting all requests to the entry point of your SPA.
                    <h4>Apache Configuration (.htaccess) for Single Page Apps (SPA) like React, Angular or Vue</h4>
                    <p>Create a <span class="inline-code">.htaccess</span> file in the same folder as your <span class="inline-code">index.html</span> file</p>
                    <pre><code>
# check that mod_negotiation is enabled
&lt;IfModule mod_negotiation.c&gt;
    # disable MultiViews to prevent the Apache indexing a directory
    Options -MultiViews
&lt;/IfModule&gt;

# check that mod_rewrite is enabled
&lt;IfModule mod_rewrite.c&gt;
    # enable the runtime rewrite engine
    RewriteEngine On
    RewriteBase /

    # stop processing any other rule set if index.html is requested
    RewriteRule ^index\\.html$ - [L]

    # route everything else to /index.html
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
&lt;/IfModule&gt;
                    </code></pre>
        `,
        isExpanded: true,
        date: '11/26/2022',
    },
    {
        title: "Typescript can't locate PDF files",
        content: `<span class="inline-code">TS2307: Cannot find module '...pdf' or its corresponding type declarations.</span><p>Add a <span class="inline-code">global.d.ts</span> file in your <span class="inline-code">src</span> folder</p>
                    <pre><code>
declare module '*.pdf';
                    </code></pre>
        `,
        isExpanded: false,
        date: '11/27/2022',
    },
    {
        title: 'Display PDFs in your React App',
        content: `Use <a href="https://www.npmjs.com/package/react-pdf" target="_blank">React-PDF</a>`,
        isExpanded: false,
        date: '11/27/2022',
    },
    {
        title: 'Fixing Node-Gyp Issues on Mac',
        content: `<h3>Terminal</h3>
<h4>Install node v16.17.1 Headers</h4>
<a href="https://nodejs.org/dist/v16.17.1/node-v16.17.1-headers.tar.gz" target="_blank">https://nodejs.org/dist/v16.17.1/node-v16.17.1-headers.tar.gz</a>
<ol>
<li>Download headers tar file to match your node version</li>
<li>Run the following command:</li>
<pre><code>
npx node-gyp install --tarball=/Users/{username}/Downloads/node-v16.17.1-headers.tar.gz
npx node-gyp list
</code></pre>
<li>If #2 fails, run the following commands (note: replace {username} with your username):
<pre><code>
cd /Users/{username}/Downloads
mkdir -p /Users/{username}/.node-gyp # Optional, if .node-gyp folder does not exist
cp node-v16.17.1-headers.tar.gz /Users/{username}/.node-gyp
cd /Users/{username}/.node-gyp
tar -xvf node-v16.17.1-headers.tar.gz
mv node-v16.17.1 16.17.1
cd 16.17.1
touch installVersion
echo 9 >installVersion
</code></pre>
</li></ol>`,
        isExpanded: false,
        date: '11/27/2022',
    },
    {
        title: 'Fixing Node-Gyp Issues on Windows',
        content: `<h3>Git Bash</h3>
<h4>Install node v16.17.1 Headers</h4>
<a href="https://nodejs.org/dist/v16.17.1/node-v16.17.1-headers.tar.gz" target="_blank">https://nodejs.org/dist/v16.17.1/node-v16.17.1-headers.tar.gz</a>
<ol>
<li>Download headers tar file to match your node version</li>
<li>Run the following commands (note: replace {username} with your username):
<pre><code>
cd /c/Users/{username}/Downloads
mkdir -p /c/Users/{username}/.node-gyp # Optional, if .node-gyp folder does not exist
cp node-v16.17.1-headers.tar.gz /c/Users/{username}/.node-gyp
cd /c/Users/{username}/.node-gyp
tar -xvf node-v16.17.1-headers.tar.gz
mv node-v16.17.1 16.17.1
cd 16.17.1
touch installVersion
echo 9 >installVersion
</code></pre>
</li></ol>
<h4>Install node v16.17.1 Lib</h4>
<a href="https://nodejs.org/dist/v16.17.1/win-x64/node.lib" target="_blank">https://nodejs.org/dist/v16.17.1/win-x64/node.lib</a>
<ol>
<li>Download Win x64 Node Library tar file to match your node version</li>
<li>Run the following commands (note: replace {username} with your username):
<pre><code>
mkdir /c/Users/{username}/.node-gyp/16.17.1/x64
cp /c/Users/{username}/Downloads/node.lib /c/Users/{username}/.node-gyp/16.17.1/x64
</code></pre>
</li></ol>`,
        isExpanded: false,
        date: '11/27/2022',
    },
    {
        title: 'Get stale branches in Azure DevOps',
        content: getStaleBranches,
        isExpanded: false,
        date: '11/28/2022',
    },
    {
        title: 'Delete stale branches in Azure DevOps',
        content: deleteStaleBranches,
        isExpanded: false,
        date: '11/28/2022',
    },
];

// {
//     title: '',
//     content: ``,
//     isExpanded: false,
//     date: '11/27/2022',
// },
