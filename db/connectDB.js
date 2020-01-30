const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect(process.env.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Mongo db connected');
    } catch (err) {
        console.error(err.message);
    }
}