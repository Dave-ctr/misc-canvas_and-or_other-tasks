function tocodeornottocode(time) {
  if (time < 2300) {
    return "keep coding";
  } else {
    return "go to bed";
  }
}

console.log(tocodeornottocode(2230));