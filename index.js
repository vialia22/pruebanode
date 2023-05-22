require ('dotenv').config();

const http = require("http")  
//const server = http.createServer(requestController)

const server = http.createServer((req,res)=>{
    console.log('solicitud nueva');
    res.end("Hola mundo");
})




function requestController(){
    console.log("recibimos una nueva request!!");

}

const PORT = process.env.PORT; 

server.listen(PORT,() => {console.log("server on port " + PORT)}); 