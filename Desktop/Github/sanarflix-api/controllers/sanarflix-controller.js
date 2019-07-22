const express = require('express');


const sanarFlixService = require('../services/sanarflix-services');

const criarClienteMundipagg = async (req, res, next) => {
    try {
        await sanarFlixService.criarClienteMundipagg(res);
    } catch (e) {
        console.error(e);
    }
};

const obterClienteMundipagg = async (req, res, next) => {
    await sanarFlixService.obterClienteMundipagg(res);
};

const listarClientesMundipagg = async (req, res, next) => {
    await sanarFlixService.listarClientesMundipagg(res);
};

const criarCartaocliente = async (req, res, next) => {
    await sanarFlixService.criarCartaocliente(res);
};

//
module.exports = {
    criarClienteMundipagg, obterClienteMundipagg, listarClientesMundipagg, criarCartaocliente
};