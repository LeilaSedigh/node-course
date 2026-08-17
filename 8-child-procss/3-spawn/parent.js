const { spawn } = require("child_process")
const path = require("path")


process.title = "Parent - Node"
console.log("parentpid",process.pid)

const controller = new AbortController()


const child = spawn("node" , [path.resolve(__dirname, "child.js")], {
    signal : controller.signal
})

child.stdout.on("data" , (data) =>{
    console.log(data.toString())
})

// setTimeout(()=>{
//     controller.abort()
// },5000)

child.on("close" , code =>{
    console.log("child process close" , code)
})