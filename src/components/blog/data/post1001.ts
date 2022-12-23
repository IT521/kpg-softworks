export const post1001 = `
<article>
<p>For URLs on the <i>client-side</i>, <b>React Router</b> or <b>Angular Router</b> will do the routing for you, but they fail on the <i>server-side</i> unless you make your server understands them by ensuring that your URLs reach your router. This is done by redirecting all requests to the entry point of your SPA.</p>
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
</article>
`;
