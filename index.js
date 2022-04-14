const args = process.argv;
let arr1 = args.slice(2);
const {fetchBreedDescription} = require("./breedFetcher");

const breed = arr1[0];

fetchBreedDescription(breed, (error, description) => {
  if (error) {
    console.log(`There is an error: ${error}`);
  } else {
    console.log(`${description}`);
  }
});
