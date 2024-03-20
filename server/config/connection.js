const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Neighbor-Nest');

module.exports = mongoose.connection;

// mongoose.connect('mongodb+srv://mrrenteria0159:eqy1jDEqPeFtsfw2@neighbor-nest.hryr8li.mongodb.net/?retryWrites=true&w=majority&appName=Neighbor-Nest', {
//     serverSelectionTimeoutMS: 5000, // Increase timeout to 5 seconds
// });

