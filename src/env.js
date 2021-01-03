import path from 'path'
import dotenv from 'dotenv'
import trimEnd from 'lodash/trimEnd'

const NODE_ENV = process.env.NODE_ENV
const PWD = process.env.PWD

const $root = PWD
const $environment = NODE_ENV === 'dev' ? 'testing' : ''
const SRC_PATH = path.join($root, 'src').split('/')

process.env.ROOT_PATH = $root
process.env.SRC_PATH = SRC_PATH.join('/')

const $dotenv = `${$root}/.env.${$environment}`

dotenv.config({
  path: trimEnd($dotenv, '.')
})

export default process.env
