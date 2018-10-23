const express = require('express');
const app = express();
const popularCities = require('./data/topCities.json');


app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: 'test' }));

app.get('/api/popularCities', (req, res) => {

	return res.send(popularCities);
});

app.listen(8080, () => console.log('Listening on port 8080!'));


