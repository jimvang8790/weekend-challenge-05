// // requires MongoDB and lets us use the Mongoose functions
// var mongoose = require('mongoose');
//
// // A URL to the mongo database. The URL specifies a db named movies stored in robomongo
// var mongoURI = 'mongodb://localhost:27017/movies';
//
// // Connects to the database using the URL from line 5. It will return an object that gives us access to the client.
// var MongoDB = mongoose.connect(mongoURI).connection;
//
// // The "on error" function allows us to see a console log when it can't connect
// MongoDB.on('error', function (err) {
//     console.log('mongodb connection error:', err);
// });
//
// // The final "once open" function lets us know when it's connected
// MongoDB.once('open', function () {
//   console.log('mongodb connection open!');
// });
//
// // exports MongoDB inorder to be use/called on
// module.exports = MongoDB;
