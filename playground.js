const { Cryptopunks } = require('./models');

Cryptopunks.insertMany({
    name: "CryptoPunks",
    slug: "cryptopunks",
    description: "CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s of London, Art|Basel Miami, and The PBS NewsHour.",
    image_url: "https://lh3.googleusercontent.com/QB2kKuQEw04X02V9EoC2BNYZV652LYuewUv9ZdR7KJfI9Jocwmd28jIfsGg0umSCr2bOMV8O9UpLAkoaqfYwvwmC",
    floor_price: "null"
})
    .then((response) => {
        console.log('response', response);
    })
    .catch((err) => {
        console.log('error', err);
    })