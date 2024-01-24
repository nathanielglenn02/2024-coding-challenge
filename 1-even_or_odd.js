// TEST CODE DAY-1

function evenOrOdd(x) {
    let result = "";
    if(x % 2 == 1 || x % 2 == -1)
    {
        result = "Odd";
    }
    else if (x % 2 == 0)
    {
        result = "Even";
    }
    return result;
  }

//   function evenOrOdd(number) {
//     if (number % 2 === 0) {
//       return "Even";
//     }
//     else {
//       return "Odd"
//     }
//   }

//   const evenOrOdd = (number) => number % 2 ? "Odd" : 'Even'; 


  console.log(evenOrOdd(-7))