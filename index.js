const express =require('express')
const cors =require('cors')
const passport = require('passport')
app =express()
port =process.env.PORT || 4019


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cors())
const routes=require('./routes')
routes(app)
app.listen(port,()=>{
    console.log('port is running on 4019')
})
