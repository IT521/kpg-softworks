export const post1009 = `
<article>
<p>This error message...<br /><br /><span class="inline-code">[ERROR:sandbox_linux.cc(374)] InitializeSandbox() called with multiple threads in process gpu-process</span><br /><br />...is a common Google Chrome error when trying to run it in Docker due to Chrome's GPU usage. The solution is to disable GPU and sandboxing.</p>
<h3>Cypress Legacy (versions < 10.0.0)</h3>
<pre><code <code class="language-javascript">
// cypress/plugins/index.js

module.exports = (on, config) => {
    on('before:browser:launch', (browser = {}, launchOptions) => {
        // launchOptions is an array of all the arguments that will
        // be passed to browsers when it launches
        console.log(launchOptions);

        if (browser.family === 'chromium' && browser.name !== 'electron') {
            // disable gpu and sandbox
            launchOptions.push('--disable-gpu');
            launchOptions.push('--no-sandbox');
        }

        // whatever you return here becomes the launchOptions
        return launchOptions
    })
}
</code></pre>
<h3>Cypress (versions >= 10.0.0)</h3>
<pre><code class="language-typescript">
// cypress.config.js or cypress.config.ts

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
        console.log(config);

        // modify config values
        config.defaultCommandTimeout = 10000;
        config.baseUrl = 'https://staging.acme.com';

        // modify env var value
        config.env.ENVIRONMENT = 'staging';

        on('before:browser:launch', (browser = {}, launchOptions) => {
            // args is an array of all the arguments that will
            // be passed to browsers when it launches
            console.log(launchOptions.args);

            if (browser.family === 'chromium' && browser.name !== 'electron') {
                // disable gpu and sandbox
                launchOptions.args.push('--disable-gpu');
                launchOptions.args.push('--no-sandbox');
            }

            // whatever you return here becomes the launchOptions
            return launchOptions
        })

        // IMPORTANT return the updated config object
        return config
    }
  }
})
</code></pre>
</article>
`;
