const express=require("express")

const app=express();
const path=require("path");
const fs=require("fs");
const port=800;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))//for serving static files
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine','pug')//set the template engine as pug
app.set('views', path.join(__dirname, 'views'))//set the views directory

//ENDPOINTS
app.get('/', (req,res)=>{
    const con="this is the best content over internet so use wisely "
    const params={'title':'pubg is the best game', "content":con}
    res.status(200).render('index.pug',params);
})
app.post('/', (req,res)=>{
    // name = req.body.name
    // age=req.body.age
    // gender=req.body.gender
    // address=req.body.address
    // more=req.body.more
    console.log(req.body)
    // let outputtoWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    // let outputtowrite='the name of the client is  ${name} , ${age} years old , ${gender}, residing at ${address} More about him/her: ${more}'
    // fs.writeFileSync('output.txt', outputtowrite)
    const params={'message':'Your form has been submitted successfully'}
    res.status(200).render('index.pug',params);
})

//START THE SERVER
app.listen(port, ()=>{
    console.log(`the application started successfully on port ${port}`)
})