const express = require('express')
const pinturasRouter = require('./pinturas.router')

function routerApi(app){
    const router = express.Router()

    app.use('/api/v1', router)

    router.use('/pinturas', pinturasRouter)
}

module.exports = routerApi