
let apiKey = require('./../.env').apiKey;

export class Find {
  constructor() {

  }

  search(query) {
      return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}&${query}`;

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


  callName(query, promise) {
   promise.then(function(response) {
     let body = JSON.parse(response);
     let data = body.data;
     console.log(data);
     data.forEach(function(practice) {
      let profile = practice.profile;
      let name = profile.first_name + ' ' + profile.last_name;
      console.log(name)
      let phoneNumbers = practice.practices[0].phones;
      let phoneNumber = phoneNumbers[0].number;
      console.log(phoneNumber);
      let addresses = practice.practices[0].visit_address;
      let address = addresses.street + ' ' + addresses.city + ' ' + addresses.state + ' ' + addresses.zip;
      console.log(address);
      let websites = practice.practices[0].website;
      console.log(websites);
      let acceptsNew = practice.practices[0].accepts_new_patients;
      console.log(acceptsNew);
      }),
   function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    };
    debugger;
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
