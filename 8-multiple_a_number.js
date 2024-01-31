// DAY 8/366

function findMultiples(integer, limit) {
    let result = [];
    for (let i = 1; i < limit+1; i++){
        if(i%integer == 0){
            result.push(i)
        }
    }
    return result;
  }

  console.log(findMultiples(11, 54))
  