import { FindMe } from './../js/doctor.js';
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $("#malladyButton").click(function(){
    let mallady = $("#mallady").val();
    $("#malladyInfo").text(mallady);
    });
  $("#doctorButton").click(function(){
  let doctor = $("#doctor").val();
    $("#doctorInfo").text(doctor);
  });
});
