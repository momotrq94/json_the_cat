const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error,response,body) {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (!data[0]) {
    throw new Error(`Breed not found!`);
    }
    callback(null, data[0].description);
  });
};

module.exports = {
  fetchBreedDescription
};