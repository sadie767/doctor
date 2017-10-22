import { Find } from './../js/doctor.js';
let apiKey = require('./../.env').apiKey;

  $(document).ready(function() {
    let doctorFront = new Find();
    $("#doctorButton").click(function(){
      let doctor = $("#doctor").val();
      $("#doctor").val("");
      console.log(doctor);
      let promise = doctorFront.search(apiKey);
      doctorFront.callName(doctor, promise);
      });
    });

    $(document).ready(function() {
      let malladyFront = new Find();
      $("#malladyButton").click(function(){
        let mallady = $("#mallady").val();
        $("#mallady").val("");
        console.log(mallady);
        let promise = malladyFront.search(apiKey);
        malladyFront.callApi(mallady, promise);
        });
      });
