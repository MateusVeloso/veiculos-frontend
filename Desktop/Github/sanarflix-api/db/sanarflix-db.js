const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const sanarflixDb = (user, content) => {
    /*
     * put code to call database here
     * this can be either an ORM model or code to call the database through a driver or querybuilder
     * i.e.-
     INSERT INTO blogposts (user_name, blogpost_body)
     VALUES (user, content);
     */
    return 1; //just a dummy return as we aren't calling db right now
};

const criarClienteMundipagg = (cliente) => {
//    const uri = "mongodb+srv://sanarflix:sanarflix@cluster0-fgxaf.mongodb.net/test?retryWrites=true&w=majority";
    const uri = "mongodb+srv://sanarflix:sanarflix@cluster0-fgxaf.mongodb.net/clientes";
    MongoClient.connect(uri, function (err, db) {
        if (err)
            throw err;
        var dbo = db.db("sanarflix");
        var query = {id: cliente.id};

        dbo.collection("clientes").find(query).toArray(function (err, result) {
            if (err)
                throw err;
            if(result.length <= 0){
                dbo.collection("clientes").insertOne(cliente, function (err, res) {});
            }
            db.close();
        });
    });
};

module.exports = {
    criarClienteMundipagg
};

//const MongoClient = require('mongodb').MongoClient;
//const client = new MongoClient(uri, {useNewUrlParser: true});
//client.connect(err => {
//    const collection = client.db("test").collection("devices");
//    // perform actions on the collection object
//    console.log('connect');
//    console.log(collection);
//    console.log('---');
//    client.close();
//});