//DAY 5/366

function sumArray(array) {
  
    if (array == null || array.length <= 2) {
      return 0
    }
    
    var max = Math.max.apply(Math, array);
    var min = Math.min.apply(Math, array);
    var sum = 0
    
    for (i = 0; i < array.length; i++) {
      sum += array[i];
     }
  
    return sum - max - min
  }

  console.log(sumArray([1,2,3,4,5,6]))