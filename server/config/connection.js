const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mrrenteria0159:eqy1jDEqPeFtsfw2@neighbor-nest.hryr8li.mongodb.net/?retryWrites=true&w=majority&appName=Neighbor-Nest', {
    serverSelectionTimeoutMS: 5000, // Increase timeout to 5 seconds
});

module.exports = mongoose.connection;


// mongodb+srv://mrrenteria0159:eqy1jDEqPeFtsfw2@neighbor-nest.hryr8li.mongodb.net/?retryWrites=true&w=majority&appName=Neighbor-Nest

// mongodb+srv://mrrenteria0159:eqy1jDEqPeFtsfw2@neighbor-nest.hryr8li.mongodb.net/?retryWrites=true&w=majority&appName=Neighbor-Nest