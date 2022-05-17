function randomColor() {
    let characters = "0123456789ABCDEF".split("")
    return `#${new Array(6).fill(0).map(e => e = randomArr(characters)).join("")}`
}
function randomArr(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}
console.log(randomColor())