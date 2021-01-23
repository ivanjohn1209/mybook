const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const app = express();

app.use(express.json());


//Use RouteS
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));


//DB Config
const db = config.get('MONGOURI');
//Connect to MongoMONGO_URI
mongoose.connect(process.env.MONGO_URI || db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => console.log("MONGO CONNECTED..."))
    .catch(err => console.log(err));


// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on PORT ${port}`))


//5Tb3jLrgEZcgOjIY