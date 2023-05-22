require ('dotenv').config();

const http = require("http")  
//const server = http.createServer(requestController)

const server = http.createServer((req,res)=>{   //cambiamos esto para que el servidor mande una respuesta y un cosole log
    console.log('solicitud nueva');
    res.end("Hola mundo");
})




function requestController(){    //si ponemos lo de arriba estaria en desuso
    console.log("recibimos una nueva request!!");

}

const PORT = process.env.PORT;  //llamamos a la variable port del modulo process

server.listen(PORT,() => {console.log("server on port " + PORT)});   //escuchamos por el puerto definido en .env o el que corresponda en produccion