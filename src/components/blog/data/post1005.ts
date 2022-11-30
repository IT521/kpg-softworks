export const post1005 = `
<h3>Git Bash</h3>
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
</li></ol>
`;
