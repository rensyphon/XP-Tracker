const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://rawg-video-games-database.p.rapidapi.com/games',
  headers: {
    'X-RapidAPI-Key': '7e897e8dbfc949059856f63bea202343',
    'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});