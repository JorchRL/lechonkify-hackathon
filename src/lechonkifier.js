const sharp = require("sharp")


const lechonkify = async (req, res, next) => {

    console.log("lechonkifying :3")

    // req should have these from multer.
    console.log("body", req.body)
    console.log("file", req.file)



    const inputImage = req.file.buffer
    try {
        const imageBuffer = await sharp(inputImage)
            .grayscale()
            .png()
            .toBuffer()

        res.send(imageBuffer)
    } catch (e) {
        next(e)
    }
    // res.status(200).end()
}

module.exports = { lechonkify }