// Import express
const express = require('express');
const app = express();
app.use(express.json());

// Import joi
const joi = require('joi');

// Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/FlidesFlix')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Error connecting to MongoDB...', err));

// Mongoose Schema
const filmSchema = new mongoose.Schema({
    id: Number,
    name: String,
    director: String,
    genre: [String],
    year: Number
});

// Model ----------------------------------------------------------
const Film = mongoose.model('Film', filmSchema);

// Methods --------------------------------------------------------
async function validateFilms(film) {
    const schema = await {
        name: joi.string().min(3).required(),
        director: joi.string().min(3).required(),
        genre: joi.array().min(1).required(),
        year: joi.number().integer().min(1899).max(2025).required()
    };
    return joi.validate(film, schema);
}
async function getFilms() {
    return await Film
    .find()
    .select('name director genre year')
}
async function updateFilm(id, req, res) {
    const newFilm = await Film.findByIdAndUpdate(id, {
        name: req.body.name,
        director: req.body.director,
        genre: req.body.genre,
        year: req.body.year
    });
    res.send(newFilm);
}
async function deleteFilm(id, res) {
    const result = await Film.findByIdAndDelete(id);
    res.send(result);
}

// HTTP METHOD HANDLERS --------------------------------------------

// ---------------- GET --------------------
// Home Page
app.get('/', (req, res) => {
    res.send('<h1 style="justify-content: center; text-align: center;">Welcome to the FlidesFlix!</h1>');
});
// List of Films
app.get('/api/films',async (req, res) => {
    const films = await getFilms();
    res.send(films);

});
// Especific Film
app.get('/api/films/:id',async (req, res) => {
    const films = await getFilms();
    const film = films.find(c => films.indexOf(c) + 1 === parseInt(req.params.id));
    if (!film) return res.status(404).send('The requested film does not exist.');

    return res.send(film);
});

// ---------------- POST --------------------
app.post('/api/films',async (req, res) => {
    // Validate film
    const { error } = validateFilms(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    }
    const films = await getFilms();
    // New film
    const film = new Film ({
        name: req.body.name,
        director: req.body.director,
        genre: req.body.genre,
        year: req.body.year
    });

    const result = await film.save();
    console.log(result);
    res.send(film);
})

// ---------------- PUT --------------------
app.put('/api/films/:id',async (req, res) => {
    const films = await getFilms();
    const film = films.find(c => films.indexOf(c) + 1 === parseInt(req.params.id));
    console.log(film);
    if (!film) return res.status(404).send('The requested film does not exist.');

    // Validate film
    const { error } = validateFilms(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    }
    return await updateFilm(film._id, req, res);
});

// ---------------- DELETE --------------------
app.delete('/api/films/:id',async (req, res) => {
    const films = await getFilms();
    const film = films.find(c => films.indexOf(c) + 1 === parseInt(req.params.id));
    if (!film) return res.status(404).send('The requested film does not exist.');
    return await deleteFilm(film._id, res);

});

// Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});