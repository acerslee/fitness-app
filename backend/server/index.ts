import express, { Express } from "express"

const app: Express = express()

const PORT = 4000

app.listen(() => {
  console.log(`you're listening on port ${PORT}`)
})
