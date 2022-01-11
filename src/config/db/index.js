const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://hodota123:Minhdang123@cluster0.b9kgs.mongodb.net/testDB.hodotablog',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            },
        );
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };
