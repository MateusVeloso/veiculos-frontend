const express = require('express');
const sanarflixDb = require('../db/sanarflix-db');
const fs = require('fs');
const request = require("request");

const criarClienteMundipagg = async (res) => {
    var options = {
        method: 'POST',
        uri: 'https://api.mundipagg.com/core/v1/customers',
        headers: {
            'Authorization': 'Basic ' + new Buffer("sk_test_RYwm6wBcMjt387nb:").toString('base64'),
            'Content-Type': 'application/json'
        },
        json: json
    };
    request(options, function (error, response, body) {
        sanarflixDb.criarClienteMundipagg(response.body);
        res.send('Inserido com sucesso');
//        console.log(response.body);
    });
};

const obterClienteMundipagg = async (res) => {
    var options = {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + new Buffer("sk_test_RYwm6wBcMjt387nb:").toString('base64'),
            'Content-Type': 'application/json'
        },
        url: 'https://api.mundipagg.com/core/v1/customers/cus_GdRp9XDHeSV9enjQ'
    };
    request(options, function (error, response, body) {
        res.send(response.body);
    });
};

const listarClientesMundipagg = async (res) => {
    var options = {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + new Buffer("sk_test_RYwm6wBcMjt387nb:").toString('base64'),
            'Content-Type': 'application/json'
        },
        url: 'https://api.mundipagg.com/core/v1/customers?page=1&size=50'
    };
    request(options, function (error, response, body) {
        res.send(response.body);
    });
};

const criarCartaocliente = async (res, idCliente) => {
    var options = {
        method: 'POST',
        uri: 'https://api.mundipagg.com/core/v1/customers/'+idCliente+'/cards',
        headers: {
            'Authorization': 'Basic ' + new Buffer("sk_test_RYwm6wBcMjt387nb:").toString('base64'),
            'Content-Type': 'application/json'
        },
        json: json
    };
    request(options, function (error, response, body) {
        sanarflixDb.criarClienteMundipagg(response.body);
        res.send('Inserido com sucesso');
    });
};

var json = {
    "name": "Jannifer Dayane",
    "email": "jennifer@dayanne.com",
    "code": "MY_CUSTOMER_004",
    "document": "982155321",
    "type": "individual",
    "gender": "female",
    "address": {
        "line_1": "222, Av. General Justo, Centro",
        "line_2": "11º andar",
        "zip_code": "20021130",
        "city": "Rio de Janeiro",
        "state": "RJ",
        "country": "BR"
    },
    "birthdate": "08/09/2000",
    "phones": {
        "home_phone": {
            "country_code": "55",
            "area_code": "21",
            "number": "000000201"
        },
        "mobile_phone": {
            "country_code": "55",
            "area_code": "21",
            "number": "000000201"
        }
    },
    "metadata": {
        "company": "Avengers 2"
    }
};

var json_card = {
    "number": "4000000000000010",
    "holder_name": "Tony Stark",
    "holder_document": "93095135270",
    "exp_month": 1,
    "exp_year": 20,
    "cvv": "351",
    "brand": "Mastercard",
    "private_label": false,
    "billing_address": {
        "line_1": "375, Av. General Osorio, Centro",
        "line_2": "7º Andar",
        "zip_code": "220000111",
        "city": "Rio de Janeiro",
        "state": "RJ",
        "country": "BR"
    },
    "options": {
        "verify_card": true
    }
};


module.exports = {
    criarClienteMundipagg, obterClienteMundipagg, listarClientesMundipagg, criarCartaocliente
};