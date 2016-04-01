
var express = require('express');
var bodyParser = require('body-parser');
var bd = require('./modelo');
// import express from 'express'
// import bodyParser  from 'body-parser'
// import bd from './modelo.js'
const app = express();
const router = express.Router();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended":false}));

router.route('/personas')
    .get(function(req,res){
        var response = {};
        bd.find({},function(err,data){
          res.json(data);  
        })
    })
    .post(function(req,res){
        var db = new bd();
        var response ={};
        
        db.nombre = req.body.nombre;
        db.apellido = req.body.apellido
        
        db.save(function(err){
            res.json(response);
        })
        
    })
    
router.route('/personas/:id')
 .get(function(req,res){
     var response ={};
     
     bd.findById(req.params.id,function(err,data){
           res.json(data);       
     })
 })
 .put(function(req,res){
     var response ={};
     
     bd.findById(req.params.id,function(err,data){
         
         if(err){
             response = {"error":true,"message":"error"}
         }else{
           
           if(req.body.nombre !== undefined){
               data.nombre = req.body.nombre;
           }
           
           if(req.body.apellido !== undefined){
               data.apellido = req.body.apellido;
           }
           
           data.save(function(err){
           })
           res.json(response);  
         }
         
     })
 })
 .delete(function(req,res){
     
     var response ={};
     
     bd.findById(req.params.id,function(err,data){
         
         if(err){
             response = {"error":true,"message":"error"}
         }else{
           
           if(req.body.nombre !== undefined){
               data.nombre = req.body.nombre;
           }
           
           if(req.body.apellido !== undefined){
               data.apellido = req.body.apellido;
           }
           
           data.remove(function(err){
           })
           res.json(response);  
         }
         
     })     
     
 })    

app.use('/',router);


app.listen(3000,function(){
    console.log('listen port 3000');
});


