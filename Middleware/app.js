const express = require("express")
const app = express()
const appFilter = require('./middleware/userMiddleware.js')
const router = require('./routes/userRoutes.js')
const body = require('body-parser')

app.use(body.json())

// const appFilter = (req,res,next)=>{
//        if(!req.query.id){
//            res.send("can't find")
//        }else if(req.query.id <18){
//            res.send("don't allow you")
//        }else{
//            next()
//        }
// }

app.use('/api',appFilter,router)


// app.get('/about',(req,res)=>{
//     res.send("Hello about...")
// })

// app.get('/home',(req,res)=>{
//     res.send("Hello home...")
// })
// app.use("/",router)


app.listen(8080,()=>{
    console.log("port listening at 8080")
})