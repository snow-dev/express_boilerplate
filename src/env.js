import path from 'path';
import dotenv from 'dotenv';

const NODE_ENV = process.env.NODE_ENV;
const PWD = process.env.PWD;

const $root = PWD;
const environment = NODE_ENV === 'dev' ? 'dev' : '';
const SRC_PATH = path.join($root, 'src').split('/');

process.env.ROOT_PATH = $root
process.env.SRC_PATH = SRC_PATH.join('/');


const $dotenv = `${$root}/.env.${environment}`
dotenv.config({
  path: $dotenv
});

export default process.env;