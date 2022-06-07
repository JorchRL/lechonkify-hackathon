const express = require("express")
const multer = require("multer")
const morgan = require("morgan")

const lechonkify = require("./lechonkifier.js").lechonkify

const app = express()

const PORT = process.env.PORT || 3000;


app.use(morgan("combined"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", express.static("test-client"))

/////////
//I want to receive files to memory. As a in-memory buffer

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

app.post("/lechonkifier", upload.single("pic"), lechonkify)

///////////

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`)
})