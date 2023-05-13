/*function tocodeornottocode(time) {
  if (time < 2300) {
    return "keep coding";
  } else {
    return "go to bed";
  }
}*/

function tocodeornottocode(time) {
  const hour = Number(time.toString().slice(0, 2)); // Extract the first two digits of the time and convert to a number
  
  if (hour >= 22 || hour < 9) { // If the hour is between 10:00 PM and 9:00 AM
    return "go to bed";
  } else { // If the hour is between 9:00 AM and 10:00 PM
    return "keep coding";
  }
}

console.log(tocodeornottocode(2245));