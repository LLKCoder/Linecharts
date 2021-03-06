const express = require("express")
const next = require("next")
const bodyParser = require("body-parser")
const basicAuth = require("basic-auth-connect")

const dev = process.env.NODE_ENV !== 'production'

const port = 3000

const app = next({ dev })

const handle = app.getRequestHandler()

const fs = require("fs")

app
    .prepare()
    .then(() => {
        const server = express();
        server.use(bodyParser.urlencoded({extended: true}))

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(port, (err) => {
            if (err) {
                throw err;
            }
            console.log(`> Ready on http://localhost:${port}`)
        })
    }).catch(e => {
        console.log(e)
        process.exit(1)
    })