const express = require("express")
const lechonkify = require("./lechonkifier.js").lechonkify
const app = express()

const PORT = process.env.PORT || 3000;

app.get("/", express.static("test-client"))

app.post("/lechonkifier", lechonkify)

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`)
})