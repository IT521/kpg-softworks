export const post1003 = `
<div>
<p>You can use the <span class="inline-code">react-pdf</span> library to embed a PDF document in a React application. Here's an example of how you can do it:</p>
<ol>
<li>Install the <span class="inline-code">react-pdf</span> library by running <span class="inline-code">npm install react-pdf</span> or <span class="inline-code">yarn add react-pdf</span>.</li>
<li>Import the <span class="inline-code">Document</span> and <span class="inline-code">Page</span> components from the <span class="inline-code">react-pdf</span> library in your React component:</p>
<pre><code>
import { Document, Page } from 'react-pdf';
</code></pre></li>
<li>Use the <span class="inline-code">Document</span> and <span class="inline-code">Page</span> components to render the PDF document in your React component's JSX:
<pre><code>
render() {
  return (
    &lt;Document
      file="/path/to/your/pdf/document.pdf"
      loading="Loading PDF…"&gt;
      &lt;Page pageNumber={1} /&gt;
    &lt;/Document&gt;
  );
}
</code></pre></li></ol>
<p>This will render the first page of the PDF document in your React component. You can use the <span class="inline-code">pageNumber</span> prop to specify which page you want to render.</p>
<p>Alternatively, you can also use the <span class="inline-code">object</span> element to embed a PDF document in your HTML page:</p>
<pre><code>
&lt;object data="/path/to/your/pdf/document.pdf" type="application/pdf" width="100%" height="800px"&gt;
  &lt;p&gt;It appears your browser doesn't support PDFs.&lt;/p&gt;
  &lt;p&gt;No worries, you can &lt;a href="/path/to/your/pdf/document.pdf" download&gt;download the PDF&lt;/a&gt; instead.&lt;/p&gt;
&lt;/object&gt;
</code></pre>
<p>This will embed the PDF document in the HTML page and display it in the browser. If the browser doesn't support PDF embedding, the text inside the <span class="inline-code">object</span> element will be displayed instead.</p>
</div>
`;
