const fs = require("fs");
const axios = require("axios");
const { Console } = require("console");
const { url } = require("inspector");

// Make a get request to URL and write its data to a file named by hostname of URL.
async function writeToFile(url) {
  try {
    const res = await axios.get(url);
    fs.writeFile(res.request.host, res.data, "utf8", (err) => {
      if (err) {
        console.log(`Could not download ${url}`);
      }
      console.log("Wrote to ", res.request.host);
    });
  } catch (err) {
    console.log(`Could not download ${url}. Error: ${err}`);
  }
}

// Get file from cmd line script to read URLs from file
function readFile(file) {
  fs.readFile(file, "utf8", function (err, data) {
    if (err) {
      console.log("Error: ", err);
      process.exit(1);
    }
    const urls = data.split("\n");
    for (let url of urls) {
      writeToFile(url);
    }
  });
}

readFile(process.argv[2]);
