import { Find } from './../js/doctor.js';

  $(document).ready(function() {
    let doctorFront = new Find();
    $("#doctorButton").click(function(){
      let doctor = $("#doctor").val();
      $("#doctor").val("");
      let query = "name=" + doctor;
      let promise = doctorFront.search(query);
      doctorFront.callName(query, promise);
      });
    });

    $(document).ready(function() {
      let malladyFront = new Find();
      $("#malladyButton").click(function() {
        let mallady = $("#mallady").val();
        $("#mallady").val("");
        let query = "query=" + mallady;
        let promise = malladyFront.search(query);
        malladyFront.callName(query, promise);
        });
      });
