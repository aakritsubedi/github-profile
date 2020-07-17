import axios from 'axios';

async function repoAPI(username, repoName) {
  let allInfo = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);

  return allInfo;
}


export default repoAPI;