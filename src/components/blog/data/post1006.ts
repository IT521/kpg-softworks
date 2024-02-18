export const post1006 = `
<article>
<h4>Prerequisites</h4>
<ol>
<li>Install the Azure CLI
<pre><code class="language-bash">
brew update && brew install azure-cli
</code></pre>
</li>
<li>Install the Azure CLI DevOps extension
<pre><code class="language-bash">
az extension add --name azure-devops
</code></pre>
</li>
<li>Login to Azure
<pre><code class="language-bash">
az login
</code></pre>
</li>
<li>Configure Azure CLI
<pre><code class="language-bash">
az init
</code></pre>
</li>
<li>Setup working directories
<pre><code class="language-bash">
export DEVELOPER_HOME="CHANGE_ME"; # set path to local working directory
export AZ_PROJECT_ID="CHANGE_ME"; # set Azure Project ID
export AZ_REPO_ID="CHANGE_ME"; # set Azure Repository ID

mkdir -p \${DEVELOPER_HOME}/azCLI
mkdir -p \${DEVELOPER_HOME}/azCLI/data
mkdir -p \${DEVELOPER_HOME}/azCLI/scripts

touch \${DEVELOPER_HOME}/azCLI/scripts/get_stale_branches.sh
</code></pre>
</li>
<li>Edit file: <span class="inline-code">\${DEVELOPER_HOME}/azCLI/scripts/get_stale_branches.sh</span>:
<pre><code class="language-bash">
#!/bin/bash

STALE_PERIOD=90
STALE_BRANCHES_FILE="\${DEVELOPER_HOME}/azCLI/data/staleBranches.csv"
BRANCHES_FILE="\${DEVELOPER_HOME}/azCLI/data/branches.json"
EXCLUDED_BRANCHES=("refs/heads/develop"  "refs/heads/main"  "refs/heads/master"  "refs/heads/release")

staleDateCutoff=$(date -v-"$STALE_PERIOD"d +%F)
count=0
staleCount=0
excludeCount=0
skipCount=0
lastItem=$(jq '. | length' "$BRANCHES_FILE")

# get list of stale branches
mv -f "$BRANCHES_FILE" "$BRANCHES_FILE".bak
az repos ref list --repository $AZ_REPO_ID --filter heads --output json > "$BRANCHES_FILE"

mv -f "$STALE_BRANCHES_FILE" "$STALE_BRANCHES_FILE".bak
echo "branch,objectId,creator,lastAuthor,lastModified" > "$STALE_BRANCHES_FILE"
jq -c '.[]' "$BRANCHES_FILE" | while read ref; do
    count=$((count+1))
    objectId=$(jq -r '.objectId' <<< "$ref")
    branch=$(jq -r '.name' <<< "$ref")
    creator=$(jq -r '.creator.uniqueName' <<< "$ref")

    if [[ "$creator" == *"OIDCONFLICT"* ]] ; then
        creator=$(echo "$creator" | sed "s/OIDCONFLICT_UpnReuse_........-....-....-....-............_//g")
    fi

    commit=$(az devops invoke --area git --resource commits --output json --route-parameters project=$AZ_PROJECT_ID repositoryId=$AZ_REPO_ID commitId=$objectId)
    lastAuthor=$(jq -r '.committer.email' <<< "$commit")
    lastModified=$(jq -r '.push.date' <<< "$commit")
    lastModified=\${lastModified:0:10}

    if [[ "$lastModified" < "$staleDateCutoff" ]] ; then
        staleBranch=true
        for excludedBranch in "\${EXCLUDED_BRANCHES[@]}" ; do
            if [[ "$branch" == *"$excludedBranch"* ]] ; then
                staleBranch=false
                break
            fi
        done

        if [ "$staleBranch" == true ] ; then
            staleCount=$((staleCount+1))
            branch=$(echo \${branch} | sed "s_refs/heads/__g")
            printf "%04d - Stale: %s\n" $staleCount $branch
            echo "$branch,$objectId,$creator,$lastAuthor,$lastModified" >> "$STALE_BRANCHES_FILE"
        else
            excludeCount=$((excludeCount+1))
            printf "%04d - Excluded: %s\n" $excludeCount $branch
        fi
    else
        skipCount=$((skipCount+1))
        printf "%04d - Skipped: %s %s\n" $skipCount $lastModified $branch
    fi
    if [ "$count" == "$lastItem" ] ; then
        echo $"Total branches: $count\nStale branches: $staleCount\nExcluded branches: $excludeCount\nSkipped branches: $skipCount" | column -t
    fi
done
</code></pre>
</li>
<li>Run script
<pre><code class="language-bash">
cd \${DEVELOPER_HOME}/azCLI
sh ./scripts/get_stale_branches.sh
</code></pre>
</li>
<li>See <a href="/blog/1007" target="_blank">Delete stale branches in Azure DevOps</a></li>
</ol>
<h5>Resources</h5>
<ul>
<li><a href="https://learn.microsoft.com/en-us/cli/azure/install-azure-cli" target="_blank">How to install the Azure CLI</a></li>
<li><a href="https://learn.microsoft.com/en-us/cli/azure/azure-cli-extensions-list" target="_blank">Available Azure CLI extensions</a></li>
<li><a href="https://learn.microsoft.com/en-us/cli/azure/azure-cli-configuration" target="_blank">Azure CLI configuration</a></li>
</ul>
</article>
`;
