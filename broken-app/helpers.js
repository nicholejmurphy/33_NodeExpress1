const axios = require("axios");

function getResults(developers) {
  try {
    const results = developers.map(async (d) => {
      let res = await axios.get(`https://api.github.com/users/${d}`);
      let userData = { name: res.data.name, bio: res.data.bio };
      return userData;
    });
    return results;
  } catch (err) {
    console.log("Error: ", err);
  }
}

module.exports = getResults;
