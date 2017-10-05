var config = {
    apiKey: "AIzaSyCjeKr9dIc5z94ZhTBm7hv-gK2UUT184iE",
    authDomain: "trainscheduler-7f9ba.firebaseapp.com",
    databaseURL: "https://trainscheduler-7f9ba.firebaseio.com",
    projectId: "trainscheduler-7f9ba",
    storageBucket: "trainscheduler-7f9ba.appspot.com",
    messagingSenderId: "715496271129"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $(".btn").on("click", function(){
    event.preventDefault();
    console.log("btn");

    var tName = $("#tname").val().trim(); 
    var Dest = $("#dest").val().trim();
    var firstTT = $("#first").val().trim();
    var Freq = $("#frqrate").val().trim();
    console.log(Freq, Dest, firstTT, tName);

    var newSchedule = {

      trainName: tName,
      trainDest: Dest,
      trainTime: firstTT,
      trainFreq: Freq
    };

    database.ref().push(newSchedule)
    
    // This will ensure that the input fields are cleared when the user submits the form.
    $("#tname").val("");
    $("#dest").val("");
    $("#first").val("");
    $("#frqrate").val("");

// database.ref().on("child_added", function(childsnap){

// })


});