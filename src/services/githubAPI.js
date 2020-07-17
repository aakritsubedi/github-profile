import axios from 'axios';

async function githubAPI(username) {
  let allInfo = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`);

  return allInfo;
}

export default githubAPI;