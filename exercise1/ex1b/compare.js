function compare(arrayA, arrayB) {
  let counter = 0;
  let indexB = 0;
  const duplicatedValues = {};

  for (let indexA = 0; indexA < arrayA.length; indexA++) {
    for (indexB = 0; indexB < arrayB.length; indexB++) {
      if (arrayA[indexA] === arrayB[indexB]) {
        counter++;
      }
    }

    if (counter > 0) {
      duplicatedValues[arrayA[indexA]] = counter;
      counter = 0;
    }
  }

  return duplicatedValues;
}

module.exports = compare;
