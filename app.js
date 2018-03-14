// const uuidv1 = require('uuid/v1');
// uuidv1();

// const requirejs = require('requirejs');
//
// requirejs.config({
//     "baseUrl": "index.html",
//     "paths": {
//       "app": "../app",
//       "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
//     }
// });
//
// // Load the main app module to start the app
// requirejs(["app"]);
//
// requirejs.config({
//     //Pass the top-level main.js/index.js require
//     //function to requirejs so that node modules
//     //are loaded relative to the top-level JS file.
//     nodeRequire: require

// });
//
// requirejs(['foo', 'bar'],
// function   (foo,   bar) {
//     //foo and bar are loaded according to requirejs
//     //config, but if not found, then node's require
//     //is used to load the module.
// });

// require(['conekta'], function (conekta) {
// });

define(function (require) {
    var namedModule = require('conekta');
    conekta.api_key = 'CtTiutDz9Zd6Wbqs5S9xUGw';
    conekta.locale = 'es'
});
// var conekta = require('conekta');

;


// conekta.setPublicKey("key_CtTiutDz9Zd6Wbqs5S9xUGw");


var successResponseHandler = function(token) {
  // Do something on sucess
  // you need to send the token to the backend.
};




 var conektaSuccessResponseHandler = function(token) {
   var $form = $("#card-form");
   //Inserta el token_id en la forma para que se envíe al servidor
    $form.append($('<input type="hidden" name="conektaTokenId" id="conektaTokenId">').val(token.id));
   $form.get(0).submit(); //Hace submit
 };
 var conektaErrorResponseHandler = function(response) {
   var $form = $("#card-form");
   $form.find(".card-errors").text(response.message_to_purchaser);
   $form.find("button").prop("disabled", false);
 };

 //jQuery para que genere el token después de dar click en submit
 $(function () {
   $("#card-form").submit(function(event) {
     var $form = $(this);
     // Previene hacer submit más de una vez
     $form.find("button").prop("disabled", true);
     Conekta.Token.create($form, conektaSuccessResponseHandler, conektaErrorResponseHandler);
     return false;
   });
 });

 // console.log(order);
