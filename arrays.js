var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  oldArray = array;
  newArray = [element, ...oldArray]
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}
