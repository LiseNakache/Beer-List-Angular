var mongoose = require('mongoose');

var beerSchema = new mongoose.Schema({
    name: { type: String },
    style: { type: String },
    image_url: { type: String },
    abv: { type: Number },
    ratings: [Number],
    comment : []
});

var Beer = mongoose.model('beer', beerSchema)

module.exports = Beer;
