// DAY 7/366

/* function countBy(x, n) {
    let z = [];
    for(let i = 1; i <= n; i++){
        z.push(i*x)
    }
    return z;
  } */

// Array(n) untuk membuat array kosong dengan jumlah n
// [...] untuk mengisi array tersebut dengan undifined 


//   function countBy(x, n) {
//     return [...Array(n)].map((el , i) => (i+1)* x)
//   }

  const countBy = (x,n) => [...Array(n)].map((el , i) => (i+1)* x)



  console.log(countBy(2,10))