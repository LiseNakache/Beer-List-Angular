var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    username: String,
    text: String
})


var beerSchema = new mongoose.Schema({
    name: { type: String },
    style: { type: String },
    image_url: { type: String },
    abv: { type: Number },
    ratings: [Number],
    comment : [],
    reviews : [reviewSchema]
});





var Beer = mongoose.model('beer', beerSchema)
// var Review = mongoose.model('review', reviewSchema)

module.exports = Beer;
