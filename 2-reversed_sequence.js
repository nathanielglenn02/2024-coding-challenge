//DAY 2/366

const reverseSeq = (n) => {
    const result = [];
    for(let i = n; i >= 1; i--)
    {
        result.push(i);
    }
    return result;
  };


  // const reverseSeq = length => Array.from({length}, () => length--);

console.log(reverseSeq(6));