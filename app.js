// first: request
const request = require('request');
request('http://api.weatherstack.com/current?query=taiwan&access_key=2a731f6eb8ecad08736437c7d4873e14', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  const data = JSON.parse(response.body)
  console.log(data)
});

// Second: fetch

// Third: axios
const axios = require("axios");
const url = "http://api.weatherstack.com/current?query=taiwan&access_key=2a731f6eb8ecad08736437c7d4873e14";
axios.get(url).then((res)=>{console.log(res.data)})