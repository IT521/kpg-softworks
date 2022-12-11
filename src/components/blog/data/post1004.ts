export const post1004 = `
<h3>Terminal</h3>
<h4>Install node v16.17.1 Headers</h4>
<a href="https://nodejs.org/dist/v16.17.1/node-v16.17.1-headers.tar.gz" target="_blank">https://nodejs.org/dist/v16.17.1/node-v16.17.1-headers.tar.gz</a>
<ol>
<li>Download headers tar file to match your node version</li>
<li>Run the following command:</li>
<pre><code data-language-bash>
npx node-gyp install --tarball=/Users/{username}/Downloads/node-v16.17.1-headers.tar.gz
npx node-gyp list
</code></pre>
<li>If #2 fails, run the following commands (note: replace {username} with your username):
<pre><code data-language-bash>
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
</li></ol>
`;
