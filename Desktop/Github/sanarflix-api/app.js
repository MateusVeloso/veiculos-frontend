const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.send('App is working'));

app.use('/api', routes);

app.listen(80, () => console.log('Example app listening on port 80! : '));

module.exports = {
    app
};


//Exemplo conexao
//const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://sanarflix:sanarflix@cluster0-fgxaf.mongodb.net/test?retryWrites=true&w=majority";
//const client = new MongoClient(uri, {useNewUrlParser: true});
//client.connect(err => {
//    const collection = client.db("test").collection("devices");
//    // perform actions on the collection object
//    console.log('connect');
//    console.log(collection);
//    console.log('---');
//    client.close();
//});