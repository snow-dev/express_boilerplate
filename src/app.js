import env from 'env' // eslint-disable-line
import express from 'express'
import bootstrap from './core/bootstrap';

// Instantiate App
const app =  bootstrap(express());
module.exports = app;
