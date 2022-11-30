export const post1007 = `
<h4>Prerequisites</h4>
<ol>
<li>See <a href="/blog/1006" target="_blank">Get stale branches in Azure DevOps</a></li>
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
<li>Edit file: <span class="inline-code">\${DEVELOPER_HOME}/azCLI/scripts/delete_stale_branches.sh</span>:
<pre><code>
#!/bin/bash

STALE_BRANCHES_FILE="\${DEVELOPER_HOME}/azCLI/data/staleBranches.csv"
GIT_DELETE_STALE_BRANCHES_FILE="\${DEVELOPER_HOME}/git-delete-stale-branches.sh"

deleteCount=0
failCount=0
lastItem=$(cat "$STALE_BRANCHES_FILE" | wc -l)
lastItem=$((lastItem-1))

echo "#!/opt/homebrew/bin/bash" > "$GIT_DELETE_STALE_BRANCHES_FILE"

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
            echo "git push -f origin --delete '"$branch"'" | sed "s_refs/heads/__g" >> "$GIT_DELETE_STALE_BRANCHES_FILE"
        fi
    fi
    if [ "$count" == "$lastItem" ] ; then
        echo $"$deleteCount branches deleted\n$failCount branches not deleted"
    fi
done
</code></pre>
</li>
<li>Run delete script
<pre><code>
cd \${DEVELOPER_HOME}/azCLI
sh ./scripts/delete_stale_branches.sh
</code></pre>
</li>
<li>If needed, run force delete script
<pre><code>
cd # to your local repo folder
sh \${DEVELOPER_HOME}/git-delete-stale-branches.sh
</code></pre>
</li>
</ol>
<h5>Resources</h5>
<ul>
<li><a href="https://learn.microsoft.com/en-us/cli/azure/install-azure-cli" target="_blank">How to install the Azure CLI</a></li>
<li><a href="https://learn.microsoft.com/en-us/cli/azure/azure-cli-extensions-list" target="_blank">Available Azure CLI extensions</a></li>
<li><a href="https://learn.microsoft.com/en-us/cli/azure/azure-cli-configuration" target="_blank">Azure CLI configuration</a></li>
</ul>
`;
