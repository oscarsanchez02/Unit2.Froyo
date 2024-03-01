const userInputString = prompt(
    "enter a list of froyo flavors with comma-separated.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

  function count(arr){
  const flavorCount = {};
  arr.forEach(flavor => {
    if (flavorCount[flavor]) {
      flavorCount[flavor]++;
    } else {
      flavorCount[flavor] = 1;
    }
  });

  return flavorCount;
  
}

  const userInputArray = userInputString.split(',');
  const flavorCount = count(userInputArray);
  console.table(flavorCount);
