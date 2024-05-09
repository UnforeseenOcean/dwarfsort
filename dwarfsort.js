function dwarfSort(arr) {
  var len = arr.length;
  var sorted = false;
  while (!sorted) {
    sorted = true;
    for (var i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Move the larger number to the back
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        sorted = false;
      }
    }

    if (sorted) {
      // Check if all elements are in order
      for (var j = 0; j < len - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          sorted = false;
          break;
        }
      }
    }
  }
  return arr;
}
