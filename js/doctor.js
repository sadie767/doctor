
let apiKey = require('./../.env').apiKey;

export class Find {
  constructor() {

  }

  search(query) {
      return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_key=${apiKey}&${query}`;

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
     if (data.length > 0) {
       $("#doctorInfo").empty();
       data.forEach(function(practice) {
        let profile = practice.profile;
        let name = profile.first_name + ' ' + profile.last_name;
        $("#doctorInfo").append('<li>Name: ' + name + '</li><br>');
        let phoneNumbers = practice.practices[0].phones;
        let phoneNumber = phoneNumbers[0].number;
        $("#doctorInfo").append('<li>Phone Number: ' + phoneNumber + '</li><br>');
        let addresses = practice.practices[0].visit_address;
        let address = addresses.street + ' ' + addresses.city + ' ' + addresses.state + ' ' + addresses.zip;
        $("#doctorInfo").append('<li>Address: ' + address + '</li><br>');
        let website = practice.practices[0].website;
        $("#doctorInfo").append('<li>Website: ' + website + '</li><br>');
        let acceptsNew = practice.practices[0].accepts_new_patients;
        $("#doctorInfo").append('<li>Accepting New Patients? ' + acceptsNew + '</li><br><hr>');
        debugger;
        }),
        function(error) {
          $('.showErrors')(`There was an error processing your request: ${error.message}`);
        };
      } else {
        $("#doctorInfo").append("Your Query Returned No Results, Try Again!");
      }
    });
  }
}
