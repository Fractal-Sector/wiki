import { Octokit } from "@octokit/rest";
import fs from "fs";

const octokit = new Octokit();

async function run() {
    const { data: pulls } = await octokit.pulls.list({
        owner: 'Fractal-Sector',
        repo: 'Fractal-Sector',
        state: 'closed',
        per_page: 100
    });

    const mergedPulls = pulls.filter(p => p.merged_at !== null);
    const counts = {};
    mergedPulls.forEach(p => {
        const user = p.user.login;
        counts[user] = (counts[user] || 0) + 1;
    });

    const filtered = Object.keys(counts).map(login => {
        const pr = mergedPulls.find(p => p.user.login === login);
        return {
            login: login,
            avatar: pr.user.avatar_url,
            prs: counts[login],
            url: pr.user.html_url
        };
    });

    fs.writeFileSync('src/data/contributors.json', JSON.stringify(filtered, null, 2));
}

run();