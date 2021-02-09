var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  newArray = [element, ...array]
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}
