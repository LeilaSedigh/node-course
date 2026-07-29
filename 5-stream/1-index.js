const Stream = require("stream")

const writeableStream = new Stream.Writable()

writeableStream._write = (chunk , encoding , next)=>{
    console.log(chunk.toString())
    // console.log(encoding)
    next()
}

const readableStream = new Stream.Readable()
readableStream.pipe(writeableStream)

readableStream._read = (size) =>{
    // console.log("size",size )
}

let counter = 1

const intervaiId = setInterval(()=>{
    readableStream.push(String(counter++))
},2000)

setTimeout(()=>{
    clearImmediate(intervaiId)
}, 8000)