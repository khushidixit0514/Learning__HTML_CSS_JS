const http=require('http')
const fs=require('fs')
const filecontent=fs.readFileSync('plane.txt')

const server=http.createServer((req,res)=>{
    res.end(filecontent)
})
server.listen(80,'127.0.9.1',()=>{
    console.log("listening to port 80")
})