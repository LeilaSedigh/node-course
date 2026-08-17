const heavyProcess = require("./heavy-process")

const result = heavyProcess()

setTimeout(()=>{
    process.send({result})

    process.send("Child say : salam")

},0)

process.on("message",((data)=>{
    console.log(data)
}))