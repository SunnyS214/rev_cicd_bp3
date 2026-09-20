const express= require('express')
const app= express()
const port =  3000
app.get("/" ,(req , res)=>{
    res.send("docker build push cicd pipeline buildpush2")
} )

app.listen(port , ()=>{
    console.log('app listen on port ' , port )
})