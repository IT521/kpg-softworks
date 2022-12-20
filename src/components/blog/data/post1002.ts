export const post1002 = `
<p>TypeScript is a programming language that adds optional static typing to JavaScript. One important aspect of TypeScript is module resolution, which refers to the process of finding and loading the correct version of a module at runtime.</p>
<p>TypeScript uses the Node.js module resolution algorithm to find and load modules. This algorithm starts by looking for a file with the specified name in the current directory. If the file is not found, it will look in the node_modules directory. This process is repeated recursively until the module is found or the root directory is reached.</p>
<p>There are several ways to specify a module in TypeScript:</p>
<ol>
<li>Relative paths: A relative path specifies the location of the module relative to the current file. For example, "./foo" specifies a module in the same directory as the current file, while "../foo" specifies a module in the parent directory of the current file.</li>
<li>Non-relative paths: A non-relative path specifies the location of the module using a path that is not relative to the current file. This could be a path to a file in a node_modules directory or a path to a file on the filesystem.</li>
<li>Node.js built-in modules: TypeScript includes declarations for many of the built-in Node.js modules, such as "fs" and "http". These modules do not need to be imported using a relative or non-relative path, as they are automatically available in any TypeScript file.</li>
<li>External modules: External modules are modules that are not part of the current project, but are installed as dependencies using npm. These modules can be imported using a non-relative path, such as "lodash" or "react".</li>
</ol>
<p>TypeScript also supports customizing the module resolution process using the "paths" and "baseUrl" options in the compilerOptions section of the tsconfig.json file. The "paths" option allows developers to specify custom path mappings for specific modules, while the "baseUrl" option allows developers to specify a base directory for module resolution.</p>
<p>By understanding how TypeScript resolves modules, developers can effectively use external libraries and manage dependencies in their projects.</p>
<p>How to fix TS2307 error</p>
<span class="inline-code">TS2307: Cannot find module '...pdf' or its corresponding type declarations.</span>
<p>Add a <span class="inline-code">global.d.ts</span> file in your <span class="inline-code">src</span> folder</p>
<pre><code>
declare module '*.pdf';
</code></pre>
`;
