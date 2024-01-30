// DAY 7/366

function powersOfTwo(n){
    let result = [];
    for(let i = 0; i < n+1; i++){
        result.push(2 ** i)
    }
    return result;
  }

  console.log(powersOfTwo(4))