//Phil Hofer
//CMP237
//dowConversion.js

//Pass in a value and it will be compared in the switch statement.
//If it matches, it returns the corresponding value.
function dayConvert(day) {
  //creating the switch statement because it is the easiest way I know of
  //to handle this many cases easily.
  switch (day) {
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    case 7:
      return "Sunday";
      break;
    case "Monday":
      return 1;
      break;
    case "Tuesday":
      return 2;
      break;
    case "Wednesday":
      return 3;
      break;
    case "Thursday":
      return 4;
      break;
    case "Friday":
      return 5;
      break;
    case "Saturday":
      return 6;
      break;
    case "Sunday":
      return 7;
      break;
    default:
      print("This is the base case.");
  }
}

//A couple of examples.
print(dayConvert("Monday"));
print(dayConvert(5));
