const mongoose = require('mongoose');

const cryptopunksSchema = new mongoose.Schema({
    name: String,
    slug: String,
    // title: { type: String, required: true },
    description: String,
    image_url: String,
    floor_price: String,
});

const Cryptopunks = mongoose.model("Cryptopunks", cryptopunksSchema);

module.exports = Cryptopunks;

