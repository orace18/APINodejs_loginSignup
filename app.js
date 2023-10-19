const express = require('express');
const mongoose = require('mongoose');

const app = express();

const stuffRouters =  require("./routes/stuff");
const userRouters = require('./routes/user');

mongoose.connect('mongodb+srv://orace:smile18@cluster0.glclky0.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());
app.use('/api/stuff', stuffRouters);
app.use('api/auth/', userRouters);

module.exports = app;