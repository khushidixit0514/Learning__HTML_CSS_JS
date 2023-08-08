// ek server bnaya h hmne
const http = require('http')
const fs=require('fs')
const filecontent=fs.readFileSync('plane.txt')
// phla argument request h dusra argument respond h
const server=http.createServer((req,res)=>{
    // res.writeHead(200,{'content-type':'text/html'})
    res.end(filecontent)
})
server.listen(80,'127.6.0.1',()=>{
    console.log("Lstening on port 80")
})