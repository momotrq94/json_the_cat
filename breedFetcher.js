const request = require("request");
const args = process.argv;
let arr1 = args.slice(2);

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${arr1[0]}`,
  function(error, response, body) {
    if (error) {
      return console.log(`error: ${error}`);
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      return console.log(`${arr1[0]} cat breed was not found!`);
    }
    console.log(data[0].description);
  }
);
