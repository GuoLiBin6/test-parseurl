#!/usr/bin/node

var express=require('express');
var parseurl=require('parseurl');

var app=express();




app.get('/',function(req,res){

  console.log('');
  console.log('req.url',req.url);
  console.log('req.originalUrl',req.originalUrl);
  console.log('');

  console.log('req._parsedOriginalUrl',req._parsedOriginalUrl);
  console.log('');
 
 
  console.log('***************将要进行第一次解析*****************');
  parseurl.original(req);
  console.log('****************第一次解析结束*********************');
  console.log('');
  console.log('req._parsedOriginalUrl',req._parsedOriginalUrl);
  console.log('');
  console.log('****************将要进行第二次解析*****************');
  parseurl.original(req);
  console.log('****************第二次解析结束*********************');
  console.log('');
  
  
   });

app.listen(8080,function(){
  console.log('listening on port:',this.address().port);
});



