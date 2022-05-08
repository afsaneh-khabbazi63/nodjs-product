//Es5:
// modul.exports=app 
//  const app2 = require("./app.js") 

// modul.exports={app , sum, divition } 
//  const {app, sum, division}= require("./app.js")

//ES6:
//  export default app  
//  import app from "./app.js"

//  export { app , sum , divition}
//  import { app , sum , divition} from "./app.js"
// document.getElementById("btn-login").addEventListener("click",function (event) {
    
// })

// const http = require("http")
// http.createServer( function(req,res) {

//     res.write("<h1>hello</h1>");
//     res.end();
// }


// ).listen(5000)

// #######################################
const express = require("express")
const app = express()
const mongoose=require("mongoose")
const dotenv= require("dotenv")

const routerIndex=require("./routes/indexRouter")
const productRouter= require("./routes/productRouter")
const userRouter= require("./routes/userRouter")
const authRouter= require("./routes/authRouter")

/////////// config express req,res////////////
app.use(express.json())
dotenv.config()

////////// config db ////////
mongoose.connect(process.env.DB_URL)

////////// Routes middleware ////////////////////////
app.use(routerIndex)
app.use(productRouter)
app.use(userRouter)
app.use(authRouter)




//product crud create read update delete  
//user crud create read update delete

//localhost:5000/

//mvc ---> model view controller
//restful api (json, xml) ---------- model controller midelware route 
// micro service


app.listen(process.env.PORT)






