const express= require('express')
const path=require('path')
const app=express()
const date = new Date();


const logger=(req,res,next)=>{
    if(date.getDay()!=0&&date.getDay()!=6&&(17>date.getHours()&&date.getHours()>9))
        {
            next()
           
        }
        else
        { res.sendFile(path.join(__dirname,'public/404page.html')) }
       
       
    }
  


app.use(logger)
app.use(express.static('public'))
const port=5000
app.listen(port,()=>console.log(`server running on port ${port}`))