const express = require('express')
const app = express()
const port = 3050
app.use(express.json())

function randomColor() {
    let characters = "0123456789ABCDEF".split("")
    return `#${new Array(6).fill(0).map(e => e = randomArr(characters)).join("")}`
}
function randomArr(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

app.get('/color/palette', (req, res) => {
    res.status(200).json(color = {
        color1: {
            color: randomColor(),
            locked: false
        },
        color2: {
            color: randomColor(),
            locked: false
        },
        color3: {
            color: randomColor(),
            locked: false
        },
        color4: {
            color: randomColor(),
            locked: false
        },
        color5: {
            color: randomColor(),
            locked: false
        }
    })
})




app.listen(port, () => {
    console.log(`À escuta em http://localhost:${port}`)
})