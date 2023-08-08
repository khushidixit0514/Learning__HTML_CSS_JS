const http=require('http');
const fs=require('fs')

const hostname = '127.0.0.1';
const port = 3000;

const home=fs.readFileSync("./index")
const about=fs.readFileSync(" ./about")
const services=fs.readFileSync("./services")
const contact=fs.readFileSync("./contact") 

const server=http.createserver((req,res)=>{
    console.log(req.url)
    url=req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (url=='/'){
        res.end(home);
    }
    else if (url=='/about'){
        res.end(about)
    }
    else if (url=='/services'){
        res.end(services)
    }
    else if (url=='/contact'){
        res.end(contact)
    }
    else{
        res.statuscode=404;
        res.end("<h1>404 code not found</h1>")
    }

});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});