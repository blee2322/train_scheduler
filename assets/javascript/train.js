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
  console.log(firstTT);
  var newSchedule = {

    trainName: tName,
    trainDest: Dest,
    trainTime: firstTT,
    trainFreq: Freq
  }

  database.ref().push(newSchedule)
  
  // This will ensure that the input fields are cleared when the user submits the form.
  $("#tname").val("");
  $("#dest").val("");
  $("#first").val("");
  $("#frqrate").val("");
});

  database.ref().on("child_added", function(childsnap){

    var tName = childsnap.val().trainName;
    var Dest = childsnap.val().trainDest;
    var firstTT = childsnap.val().trainTime;
    var Freq = childsnap.val().trainFreq;

    var tFreq = Freq;
    console.log(tFreq);
    var firstTrain = firstTT;
    var firstTrainConvert = moment(firstTrain, "HH:mm");
    var tDiff = moment().diff(moment(firstTrainConvert), "minutes");
    //trainRemain will be my value for minutes away
    var trainRemain = tDiff % tFreq;
    var minTill = tFreq - trainRemain;
    //This will give me the next train
    var nxtTrain = moment().add(minTill, "minutes").format("HH:mm");


  $("#arivDisplay").append("<tr><td>" + tName + "</td><td>" + Dest + "</td><td>" +
  firstTT + "</td><td>" + Freq + "</td><td>" + nxtTrain + "</td><td>" + minTill + "</td></tr>");
  
});
