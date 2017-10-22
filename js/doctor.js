
let apiKey = require('./../.env').apiKey;

export class Find {
  constructor() {

  }

  search(query) {
      return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=cbe5f7b04b5bb714d1411d4a9943f218&query=${query}`;
      console.log("here1");
        request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        };
        request.open("GET", url, true);
        request.send();
    });
  }


  callName(query, promise, error) {
   promise.then(function(response) {
     let body = JSON.parse(response);
     let data = body.data;
     debugger;
     console.log("here2");
     data.forEach(function(nest) {
       let doctorInfo = nest['doctorInfo'];
       let doctorName = doctorInfo.first_name + ' ' + profile.last_name;
       console.log(doctorName);
      $('#doctorInfo').append("For Help With ${`query`}, contact: " + "<li>" + doctorName + "</li>")
     }),
   function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    };
  });

}


  //  if(query === this.query) {
  //    arrays.forEach(function(query) {
  //      $("#doctorInfo").append(query.practices[0].first_name);
  //    });
  //     }
    //   else {
    //    return "Sorry, There Are No Doctors That Match Your Criteria";
    //  }




//  getDoctorByName(name) {
//    if(name===this.name){
//      arrays.forEach(function(name){
//        $("#doctorInfo").text(name.practices[0].name)
//      } else {
//        "Sorry, There Are No Doctors That Match Your Criteria"
//      })
//    }
//  }
//
}
