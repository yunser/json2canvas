
const { createCanvas } = require('canvas')
const fs = require('fs')

const canvas = createCanvas(300, 300)
const ctx = canvas.getContext('2d')

ctx.fillStyle = '#f00'
ctx.beginPath()
ctx.rect(100, 100, 100, 100)
ctx.fill()

fs.writeFileSync('res/test.png', canvas.toBuffer())

