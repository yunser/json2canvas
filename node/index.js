const { createCanvas, Image } = require('canvas')
const fs = require('fs')

const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')

ctx.fillStyle = '#fff'
ctx.fillRect(0, 0, 200, 200)

ctx.fillStyle = '#000'
// Write "Awesome!"
ctx.font = '30px Impact'
// ctx.rotate(0.1)
ctx.fillText('Awesome!', 50, 100)


const img = new Image()
img.onload = () => ctx.drawImage(img, 0, 0)
img.onerror = err => { throw err }
img.src = './avatar.jpg'

fs.writeFileSync('node/test.png', canvas.toBuffer())
