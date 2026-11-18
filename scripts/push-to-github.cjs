const git = require('isomorphic-git');
const http = require('isomorphic-git/http/node');
const fs = require('fs');

async function push() {
  const token = process.argv[2] || process.env.GITHUB_TOKEN;
  if (!token) {
    console.error('Error: Please provide your GitHub Personal Access Token.');
    console.error('Usage: node scripts/push-to-github.cjs <GITHUB_PAT_TOKEN>');
    process.exit(1);
  }

  console.log('Pushing commits to remote origin (https://github.com/Hadi-tech-Studio/ECS.git)...');
  try {
    const pushResult = await git.push({
      fs,
      http,
      dir: '.',
      remote: 'origin',
      ref: 'main',
      onAuth: () => ({ username: token.trim(), password: '' }),
    });
    console.log('Successfully pushed to GitHub on branch main!');
    console.log(JSON.stringify(pushResult, null, 2));
  } catch (error) {
    console.error('Push failed:', error.message);
    if (error.data) {
      console.error('Details:', error.data);
    }
    process.exit(1);
  }
}

push();
