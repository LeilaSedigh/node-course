const Stream = require("stream")

const transFormStream = new Stream.Transform()

transFormStream._transform = (chunck , enciding)=>{
   const data = chunck.toString().toUpperCase() 
   transFormStream.push(data)
}

process.stdin.pipe(transFormStream).pipe(process.stdout)