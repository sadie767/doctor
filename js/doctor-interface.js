import { Find } from './../js/doctor.js';
let apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  let malladyFront = new Find();
  $("#malladyButton").click(function(){
    let mallady = $("#mallady").val();
    $("#mallady").val("");
    let promise = malladyFront.findDoctor(apiKey);
    malladyFront.callApi(mallady, promise);
    });
  });


//   $("#doctorButton").click(function(){
//     let doctorFront = new Find();
//     let doctor = $("#doctor").val();
//     console.log(doctor);
//     doctorFront.findDoctor(doctor).then(outputDoctor);
//     function outputDoctor(response){
//       let body = JSON.parse(response);
//       let arrays = [];
//       body.data.forEach(function(doctor) {
//         arrays.push(doctor);
//         });
//         arrays.forEach(function(doctor) {
//             $('#doctorInfo').append(`<li>${doctor.phones}</li>`);
//         }, function(error) {
//             $('.showErrors').text(`There was an error processing your request: ${error.message}`);
//         });
//         debugger;
//       }
//     });
//
// });
