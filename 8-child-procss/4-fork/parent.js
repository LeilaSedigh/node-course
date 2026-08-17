const { fork } = require("child_process")


const child = fork(`${__dirname}/child.js`)

child.on("message",((data)=>{
    console.log(data)
}))

// child.on()

child.send("Parent say : Aleyk")

setInterval(()=>{
    console.log(Date.now())
},1000)

// setTimeout(()=>{
// console.log(heavyProcess())
// },0)


console.log("salam" , Date.now())