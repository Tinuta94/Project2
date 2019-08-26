const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/Galaxy";

mongoose.connect(connectionString, { useNewUrlParser: true}).then( () => {
  console.log(`connected to our mongodb at: ${connectionString}`)
});

module.exports = mongoose