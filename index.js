const http = require("http")  
const server = http.createServer(requestController)



function requestController(){
    console.log("recibimos una nueva request!!!");
} 
server.listen(4000,() => {console.log("server on port 4000")}); 