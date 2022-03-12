const fs = require('fs');
const process = require('process');
const axios = require('axios');

/** read file at path and print it out. */

function cat(path) {
  fs.readFile(path, 'utf8', function(error, data) {
    if (error) {
      console.error(`Error reading ${path}: ${error}`);
      process.exit(1);
    } else {
      console.log(data);
    }
  });
}

/** read page at URL and print it out. */

async function webCat(url) {
  try {
    let response = await axios.get(url);
    console.log(response.data);
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
  webCat(path);
} else {
  cat(path);
}
