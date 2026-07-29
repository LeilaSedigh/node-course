
console.log(process.cwd()) 

console.log(process.pid)
console.log(process.ppid)

console.log(process.uptime())

setInterval(() => {
    console.log(Date.now())
}, 1000);

setTimeout(()=>{
    process.exit()
},5000)

process.on("uncaughtException",(ex)=>{
    console.log(ex)
})

throw "Error()"