const fs = require ("fs");
const path = require("path");
const http = require("https")

const linkPath = path.resolve(__dirname,"links.txt")

const data = fs.readFileSync(linkPath , "utf-8")

const files = data.split("\n")

const dir = path.resolve(__dirname , "downloads")

if(!fs.existsSync(dir)){
    fs.mkdirSync(dir)
}

files.forEach((file) =>{
// console.log("file =>",file )
const fileUrl = decodeURI(file)
// console.log("fileUrl=>",fileUrl)
const fileName = path.basename(fileUrl).replace(/\s/g , "")
// console.log("fileName =>",fileName )
const filePath = path.resolve(dir , fileName)
// console.log("filePath =>",filePath )
const fileStream = fs.createWriteStream(filePath)

http.get(file, function(response) {
    response.pipe(fileStream)

    response.on("end" , () =>{
        fileStream.close()
        console.log(`${fileName} downloaded`)
    })
})
})
