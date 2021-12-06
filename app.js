const express = require('express')
const app = express()
const middleware = require('./controller/midlewares')
const loja = require('./controller/lojaControllers')
const dbFilial = require('./database/sqlite')
const rota = require('./controller/rotas')

middleware(app)
loja(app, dbFilial)
rota(app)
module.exports = app;