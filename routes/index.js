var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */

router.get('/home-popular', (req, res) => {
  axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d512be3667f9634178d7bfcb00269281&language=en-US&page=1').then((response) => {
    res.json(response.data);
  })
});

router.get('/home-trending', (req, res) => {
  axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=d512be3667f9634178d7bfcb00269281').then((response) => {
    res.json(response.data);
  })
});

router.get('/home-top', (req, res) => {
  axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=d512be3667f9634178d7bfcb00269281&language=en-US&page=1').then((response) => {
    res.json(response.data);
  })
});

router.get('/get-movie', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/movie/${req.query.id}?api_key=d512be3667f9634178d7bfcb00269281&language=en-US`).then((response) => {
    res.json(response.data);
  }).catch((error) => {
    console.log(error);
  });
});

router.get('/get-recommendations', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/movie/${req.query.id}/recommendations?api_key=d512be3667f9634178d7bfcb00269281&language=en-US&page=1`).then((response) => {
    res.json(response.data);
  })
});

router.get('/search', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d512be3667f9634178d7bfcb00269281&language=en-US&query=${req.query.search}&page=1&include_adult=false`).then((response) => {
    res.json(response.data);
  })
});

module.exports = router;
