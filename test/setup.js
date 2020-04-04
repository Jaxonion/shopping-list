const knex = require('knex')
require('dotenv').config()
const chai = require('chai')

global.expect = chai.expect;

const knexInstance = knex({
    client: 'pg',
    connection: process.env.TEST_DATABASE_URL
})