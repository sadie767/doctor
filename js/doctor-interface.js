import { Find } from './../js/doctor.js';
let apiKey = require('./../.env').apiKey;

  $(document).ready(function() {
    let doctorFront = new Find();
    $("#doctorButton").click(function(){
      let doctor = $("#doctor").val();
      $("#doctor").val("");
      console.log(doctor);
      let query = "name=" + doctor;
      let promise = doctorFront.search(apiKey, query);
      doctorFront.listDoctors(doctor, promise);
      });
    });

    $(document).ready(function() {
      let malladyFront = new Find();
      $("#malladyButton").click(function(){
        let mallady = $("#mallady").val();
        $("#mallady").val("");
        console.log(mallady);
        let query = "query=" + mallady;
        let promise = malladyFront.search(apiKey, query);
        malladyFront.listDoctors(mallady, promise);
        });
      });
