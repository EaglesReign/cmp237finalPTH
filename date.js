//Phil Hofer
//CMP237
//date.js

function add30days() {
  var now = new Date();//time now
  print("Now: " + now);//print time now
  var thirtyDaysFromNow = now;//declare variable to store date in future
  thirtyDaysFromNow.setDate(now.getDate() + 30);//add thirty days
  print("30 days from now: " + thirtyDaysFromNow); //print new date
}

add30days();

