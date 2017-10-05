var config = {
    apiKey: "AIzaSyAZ79X5P-O-J5KLaNlMMkcKVQT4FvxPVeI",
    authDomain: "sample-project-43eec.firebaseapp.com",
    databaseURL: "https://sample-project-43eec.firebaseio.com",
    projectId: "sample-project-43eec",
    storageBucket: "sample-project-43eec.appspot.com",
    messagingSenderId: "183193077475"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("btn").on("click", function(){
    event.preventDefault();
    console.log(btn);

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

    console.log(newSchedule.trainName);


    database.ref().push(newSchedule)
    
    // This will ensure that the input fields are cleared when the user submits the form.
    $("#tname").val("");
    $("#dest").val("");
    $("#first").val("");
    $("#frqrate"),val("");




  })