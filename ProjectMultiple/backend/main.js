const express = require("express")
const app = express();
const PORT = 3050
app.use(express.json())

app.post("/create-colors", (req, res) => {
    const { colors } = req.body
    const paleta = geraPaleta(colors)
    res.status(200).json({ paleta })
})

//array with colors
let arrPal = new Array(5).fill("").map(e => e = geraCor())
//
function geraPal() {
    return arrPal = arrPal.map(e => e = geraCor())
}
function RGBToHSL(r, g, b) {
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec((hex.split("").slice(1).join("")));
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
}

app.listen(PORT, () => console.log(`Listening in http://localhost:${PORT}`))

function geraPaleta(colors) {
    geraPal()
    return colors.map((color, i) => ({
        blocked: color.blocked,
        hex: color.blocked ? color.hex : arrPal[i],
        hsl: color.blocked ? color.hsl : RGBToHSL(...hexToRgb(arrPal[i])),
        rgb: color.blocked ? color.rgb : hexToRgb(arrPal[i]),
    }))
}

function geraCor() {
    return new Array(3).fill("").reduce((acc, atual) => {
        return acc + Math.floor(Math.random() * 255).toString(16).padStart(2, "0")
    }, "#")
}