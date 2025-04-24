import express from 'express'

const app = express()
const port = process.env.PORT || 8118

app.get("/api/", (requst, response) => {
    response.send("Greetings from express")
})

app.listen(port, () => {
    console.log(`Yey! port is running at http://localhost:${port}`)
})