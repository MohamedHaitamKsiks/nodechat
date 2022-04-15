const HTTP = require('http');
const FS = require('fs');
const { parse } = require('url');
//custom modules
const { app } = require('./Routes/app');
const { send } = require('./Routes/send');
const { lasMessage } = require('./Routes/lastMessage')

//list of messages
let listMessages = [];

//start http server
const httpServer = HTTP.createServer(function (req, res){
   let parsedUrl = parse(req.url, true);
   if (parsedUrl.pathname === '/send'){
      send(res, parsedUrl.query.message, listMessages);
      console.log(listMessages);
   }
   else if (parsedUrl.pathname == '/messages'){
      lasMessage(res, listMessages)
   }
   else if (parsedUrl.pathname === "/Public/script.js"){
      res.setHeader('content-type', 'text/javascript');
      //console.log("dsa");
      FS.readFile('./src/Public/script.js', (err, data) => {
         //console.log(data);
         res.end(data);
      });
   }
   else{   
      app(res);
   }
});

//listen
httpServer.listen(8080);
