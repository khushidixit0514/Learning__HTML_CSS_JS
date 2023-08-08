const express=require("express")
const path=require("path")
const app=express();
const port=80;

app.use('/static', express.static('static'))//for serving static files
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('index.pug',params)
})

app.listen(port,()=>{
    console.log('the application started successfully on port ${port}');
});