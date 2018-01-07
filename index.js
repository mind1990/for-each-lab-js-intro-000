function iterativeLog(array) {
  var index = 0;
  array.forEach(element => {
    console.log(`${index}: ${element}`)
    index++;
  });
};
