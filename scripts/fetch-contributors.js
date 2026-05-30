import { Octokit } from "@octokit/rest";
import fs from "fs";

const octokit = new Octokit();
const IGNORED_USERS = ['bot-name', 'cherry-pick-user'];

async function run() {
    const { data } = await octokit.repos.listContributors({
        owner: 'Orehum-Project',
        repo: 'Orehum-Sector',
    });

    const filtered = data
        .filter(c => !IGNORED_USERS.includes(c.login))
        .map(c => ({
            login: c.login,
            avatar: c.avatar_url,
            prs: c.contributions,
            url: c.html_url
        }));

    fs.writeFileSync('src/data/contributors.json', JSON.stringify(filtered, null, 2));
    console.log('Данные обновлены!');
}

run();