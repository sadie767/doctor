let apiKey = require('./../.env').apiKey;

export class Find {
  constructor() {

  }
  findDoctor(doctor) {
      return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = "https://api.betterdoctor.com/2016-03-01/doctors?name=${`doctor`}location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&sort=last-name-asc&skip=0&limit=20&user_key=cbe5f7b04b5bb714d1411d4a9943f218";
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

  callApi(mallady, promise) {
    promise.then(function(response) {
      let body = JSON.parse(response);
      let arrays = [];
      let arrays2 = [];
      body.data.forEach(function(data) {
        arrays.push(data);
      });
      arrays.forEach(function(practice) {
        arrays2.push(practice)
      });
      arrays2.forEach(function(name) {
      $("#malladyInfo").append(`${name.name}`);
      }, function(error) {
        $("#showErrors").text(`There was an error processing your request: ${error.message}`);
      });
    });
  }

}
