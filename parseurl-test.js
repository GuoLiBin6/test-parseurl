#!/usr/bin/node
var server = require('http').createServer();
var url=require('url');
var parseurl=require('parseurl');



server.on('request',function(req,res){
 
  console.log('req.url',req.url);
  console.log('');
  console.log('req._parsedUrl',req._parsedUrl);
  console.log('');


  console.log('***************将要进行第一次解析*****************');
  parseurl(req);
  console.log('****************第一次解析结束*********************');
  console.log('');
  console.log('req._parsedUrl',req._parsedUrl);
  console.log('');
  console.log('****************将要进行第二次解析*****************');
  parseurl(req);
  console.log('****************第二次解析结束*********************');
  console.log('');
  
  
   });

server.listen(8080,function(){
  console.log('listening on port:',this.address().port);
});



