const express = require("express")
const app = express();
const PORT = 3050
app.use(express.json())

app.post("/create-colors", (req, res) => {
    const {colors} = req.body
    const paleta = geraPaleta(colors)
    res.status(200).json({ paleta })
})

app.listen(PORT, () => console.log(`Listening in http://localhost:${PORT}`))

function geraPaleta(colors) {
    return colors.map(color => ({blocked: color.blocked, hex: color.blocked ? color.hex : geraCor()}))
}

function geraCor() {
    return new Array(3).fill("").reduce((acc, atual) => {
        return acc + Math.floor(Math.random() * 255).toString(16).padStart(2, "0")
    }, "#")
}