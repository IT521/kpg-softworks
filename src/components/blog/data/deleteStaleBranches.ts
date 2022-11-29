export const deleteStaleBranches = `<h4>Prerequisites</h4>
<ol>
<li>Install the Azure CLI
<pre><code>
brew update && brew install azure-cli
</code></pre>
</li>
<li>Install the Azure CLI DevOps extension
<pre><code>
az extension add --name azure-devops
</code></pre>
</li>
<li>Login to Azure
<pre><code>
az login
</code></pre>
</li>
<li>Configure Azure CLI
<pre><code>
az init
</code></pre>
</li>
<li>Setup working directories
<pre><code>
export DEVELOPER_HOME="CHANGE_ME"; # set path to local working directory
export AZ_REPO="CHANGE_ME"; # set Azure Repository Name

mkdir -p \${DEVELOPER_HOME}/azCLI
mkdir -p \${DEVELOPER_HOME}/azCLI/data
mkdir -p \${DEVELOPER_HOME}/azCLI/scripts

touch \${DEVELOPER_HOME}/azCLI/scripts/delete_stale_branches.sh
</code></pre>
</li>
</ol>
File: <span class="inline-code">delete_stale_branches.sh</span>
<pre><code>
#!/bin/bash

STALE_BRANCHES_FILE="\${DEVELOPER_HOME}/azCLI/data/staleBranches.csv"
DELETE_STALE_BRANCHES_FILE="\${DEVELOPER_HOME}/git-delete-stale-branches.sh"

deleteCount=0
failCount=0
lastItem=$(cat "$STALE_BRANCHES_FILE" | wc -l)
lastItem=$((lastItem-1))

echo "#!/opt/homebrew/bin/bash" > "$DELETE_STALE_BRANCHES_FILE"

sed 1d "$STALE_BRANCHES_FILE" | while IFS="," read -r branch objectId creator lastAuthor lastModified; do
    result=$(az repos ref delete --name "'"$branch"'" --object-id "$objectId" --repository "$AZ_REPO" --output json)
    success=$(jq -r '.success' <<< "$result")
    updateStatus=$(jq -r '.updateStatus' <<< "$result")

    if [[ "$success" == true && "$updateStatus" == "succeeded" ]] ; then
        deleteCount=$((deleteCount+1))
    else
        failCount=$((failCount+1))
        echo $"FAILURE: Deleting branch $branch: $updateStatus\n"
        if [[ "$updateStatus" == *"forcePushRequired"* ]] ; then
            echo "git push -f origin --delete '"$branch"'" | sed "s_refs/heads/__g" >> "$DELETE_STALE_BRANCHES_FILE"
        fi
    fi
    if [ "$count" == "$lastItem" ] ; then
        echo $"$deleteCount branches deleted\n$failCount branches not deleted"
    fi
done
</code></pre>
<h5>Resources</h5>
<ul>
<li><a href="https://learn.microsoft.com/en-us/cli/azure/install-azure-cli" target="_blank">How to install the Azure CLI</a></li>
<li><a href="https://learn.microsoft.com/en-us/cli/azure/azure-cli-extensions-list" target="_blank">Available Azure CLI extensions</a></li>
<li><a href="https://learn.microsoft.com/en-us/cli/azure/azure-cli-configuration" target="_blank">Azure CLI configuration</a></li>
</ul>
`;
