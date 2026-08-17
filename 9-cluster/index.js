const http = require("http")
const cluster = require("cluster")
const cpuCount = require("os").cpus().length;

if(cluster.isMaster){
    for(let i = 0; i < cpuCount; i++){
        process.title = "Parent :Node" + process.pid
        cluster.fork()
    }
}else{
    //Worker can share any TCP connection
     process.title = "Child :Node" + process.pid
    makeServer()
}


function makeServer(){
http.createServer((req , res)=>{
    res.setHeader("Acces-Control-Allow-Origin" ,"http://127.0.0.0:5500")
    res.end(process.pid + "")
}).listen(3000 , () => console.log(`Server is run on port ${3000} and process ${process.pid}`))
}