
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

     if (body.meta.total > 0) {
     let data = body.data;
     console.log(data);
     data.forEach(function(practice) {
      let profile = practice.profile;
      let name = profile.first_name + ' ' + profile.last_name;
      $("#doctorInfo").append(name);
      // $("#malladyInfo").html(name);
      console.log(name);
      let phoneNumbers = practice.practices[0].phones;
      let phoneNumber = phoneNumbers[0].number;
      $("#doctorInfo").append(phoneNumber);
      // $("#malladyInfo").html(phoneNumber);
      console.log(phoneNumber);
      let addresses = practice.practices[0].visit_address;
      let address = addresses.street + ' ' + addresses.city + ' ' + addresses.state + ' ' + addresses.zip;
      $("#doctorInfo").append(address);
      // $("#malladyInfo").html(address);
      console.log(address);
      let website = practice.practices[0].website;
      $("#doctorInfo").append(website);
      // $("#malladyInfo").html(website);
      console.log(website);
      let acceptsNew = practice.practices[0].accepts_new_patients;
      let info = $("#doctorInfo").append(acceptsNew);
      // $("#malladyInfo").html(acceptsNew);
      console.log(acceptsNew);
      debugger;
      }),
      function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      };
    }
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
