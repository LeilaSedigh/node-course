const http = require ("http")


http.createServer(( req,res )=>{
if (req.url === "/"){

    console.log(req.headers.cookie);

    const entries = req.headers.cookie?.split(";").map((el) => el.trim().split("="))||[]


    const cookies = Object.fromEntries(entries)

    let counter = +cookies.counter || 0;

    console.log(cookies)

    res.setHeader("Set-cookie" , `counter=${++counter} ; Max-Age=3000; HttpOnly;Secure`)

    return res.end("Hello");


}

res.statusCode = 404;
res.end("Not Found")
}).listen(3000 , ()=> console.log("Run On Port 3000"))