export const post1026 = `
<article>
    <p>
        HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are
        the two core technologies for building and styling web pages.
    </p>
    <h3>HTML</h3>
    <p>
        HTML is a markup language that is used to structure content on the web.
        It consists of a series of elements that are used to define the
        different parts of a web page, such as headings, paragraphs, and links.
    </p>
    <p>Here's an example of a simple HTML page:</p>
<pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Welcome to my page&lt;/h1&gt;
    &lt;p&gt;This is my page. It's a work in progress, but I hope you like it!&lt;/p&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="about.html"&gt;About&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
    <p>In this example, we have the following elements:</p>
    <ul>
        <li>
            <span class="inline-code">&lt;!DOCTYPE html&gt;</span>: This tells the browser that the
            document is an HTML5 document.
        </li>
        <li>
            <span class="inline-code">&lt;html&gt;</span>: This is the root element of the HTML
            document. It encloses all of the other elements on the page.
        </li>
        <li>
            <span class="inline-code">&lt;head&gt;</span>: The <span class="inline-code">&lt;head&gt;</span> element
            contains metadata about the page, such as the title and any links to
            external stylesheets or scripts.
        </li>
        <li>
            <span class="inline-code">&lt;title&gt;</span>: The <span class="inline-code">&lt;title&gt;</span> element
            defines the title of the page, which is displayed in the browser's
            title bar.
        </li>
        <li>
            <span class="inline-code">&lt;body&gt;</span>: The <span class="inline-code">&lt;body&gt;</span> element
            contains all of the visible content on the page.
        </li>
        <li>
            <span class="inline-code">&lt;h1&gt;</span>: The <span class="inline-code">&lt;h1&gt;</span> element defines
            a level-one heading. There are also other heading elements, such as
            <span class="inline-code">&lt;h2&gt;</span> through <span class="inline-code">&lt;h6&gt;</span>, which
            define different levels of headings.
        </li>
        <li>
            <span class="inline-code">&lt;p&gt;</span>: The <span class="inline-code">&lt;p&gt;</span> element defines a
            paragraph of text.
        </li>
        <li>
            <span class="inline-code">&lt;ul&gt;</span>: The <span class="inline-code">&lt;ul&gt;</span> element defines
            an unordered list (a list with bullet points).
        </li>
        <li>
            <span class="inline-code">&lt;li&gt;</span>: The <span class="inline-code">&lt;li&gt;</span> element defines
            a list item within the unordered list.
        </li>
        <li>
            <span class="inline-code">&lt;a&gt;</span>: The <span class="inline-code">&lt;a&gt;</span> element defines a
            link. The <span class="inline-code">href</span> attribute specifies the destination of
            the link.
        </li>
    </ul>
    <h3>CSS</h3>
    <p>
        CSS is a style sheet language that is used to describe the look and
        formatting of a document written in HTML. It allows you to apply styles,
        such as fonts, colors, and layout, to your HTML elements.
    </p>
    <p>
        Here's an example of some CSS that could be used to style the HTML page
        above:
    </p>
<pre><code>
body {
  font-family: Arial, sans-serif;
  color: #333;
}

h1 {
  color: #00b8d4;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #00b8d4;
}

a:hover {
  text-decoration: underline;
}
</code></pre>
    <p>In this example, we have the following styles:</p>
    <ul>
        <li>
            The <span class="inline-code">body</span> element has a <span class="inline-code">font-family</span> of
            Arial and a color of #333 (a dark grey).
        </li>
    </ul>
    <ul>
        <li>
            The <span class="inline-code">h1</span> element has a color of #00b8d4 (a light blue).
        </li>
        <li>
            The <span class="inline-code">ul</span> element has no bullet points (<span class="inline-code"
                >list-style-type: none;</span>).
        </li>
        <li>
            The <span class="inline-code">a</span> element has no text decoration (<span class="inline-code"
                >text-decoration: none;</span>) and a color of #00b8d4.
        </li>
        <li>
            The <span class="inline-code">a:hover</span> element has an underline when the mouse
            cursor is hovering over it (<span class="inline-code">text-decoration: underline;</span>).
        </li>
    </ul>
    <p>
        To apply these styles to the HTML page, you can either link to an
        external stylesheet or include the styles directly in the HTML using a
        <span class="inline-code">&lt;style&gt;</span> element in the <span class="inline-code">&lt;head&gt;</span> of
        the document.
    </p>
    <p>For example:</p>
<pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My Page&lt;/title&gt;
    &lt;style&gt;<span class="css">
      body {
        font-family: Arial, sans-serif;
        color: #333;
      }
      /* other styles go here */
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;!-- rest of the HTML page goes here --&gt;
&lt;/html&gt;
</code></pre>
    <p>
        You can also use CSS to apply styles to specific elements on the page by
        using selectors. For example, to apply a style to all
        <span class="inline-code">&lt;p&gt;</span> elements within a
        <span class="inline-code">&lt;div&gt;</span> element with a class of "container", you could
        use the following selector:
    </p>
<pre><code>
.container p {
  /* styles go here */
}
</code></pre>
    <p>
        There are many different types of selectors that you can use to target
        specific elements on the page. You can learn more about them by reading
        the documentation or taking an online tutorial.
    </p>
    <h3>Conclusion</h3>
    <p>
        HTML and CSS are essential tools for building and styling web pages.
        Together, they provide a powerful way to create rich and visually
        appealing content for the web. By learning these technologies, you can
        create your own websites and customize the look and feel of your online
        content.
    </p>
</article>
`;
