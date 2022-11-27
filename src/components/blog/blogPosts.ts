export const blogPosts = [
    {
        title: 'How to Fix Error 404 Not Found: The requested URL was not found on this server.',
        content: `For URLs on the <i>client-side</i>, <b>React Router</b> or <b>Angular Router</b> will do the routing for you, but they fail on the <i>server-side</i> unless you make your server understands them by ensuring that your URLs reach your router. This is done by redirecting all requests to the entry point of your SPA.<h4>Apache Configuration (.htaccess) for Single Page Apps (SPA) like React, Angular or Vue</h4>
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
    },
    {
        title: 'Data Structure ',
        content:
            'There are many real-life examples of a stack. Consider an example of plates stacked over one another in the canteen. The plate which is at the top is the first one to be removed, i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow LIFO(Last In First Out)/FILO(First In Last Out) order.',
        isExpanded: false,
    },
    {
        title: 'Algorithm',
        content:
            'The word Algorithm means “a process or set of rules to be followed in calculations or other problem-solving operations”. Therefore Algorithm refers to a set of rules/instructions that step-by-step define how a work is to be executed upon in order to get the expected results. ',
        isExpanded: false,
    },
    {
        title: 'Computer Network',
        content:
            'An interconnection of multiple devices, also known as hosts, that are connected using multiple paths for the purpose of sending/ receiving data media. Computer networks can also include multiple devices/mediums which help in the communication between two different devices; these are known as Network devices and include things such as routers, switches, hubs, and bridges. ',
        isExpanded: false,
    },
];
