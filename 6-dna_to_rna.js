// DAY 6/366

/* function DNAtoRNA(dna) {
    let rna = '';
    for(let i = 0; i < dna.length; i++){
        if(dna[i] == 'T'){
            rna += 'U';
        }
        else{
            rna += dna[i];
        }
    }
    return rna;
  } */


//cara cepat
// function DNAtoRNA(dna){
//     return dna.replace(/T/g, 'U');
//   }


//rubah ke array
// function DNAtoRNA(dna){ 
//     return dna
//     .split('') // split digunakan untuk memcah string menjadi array
//     .map((el) => el == 'T' ? 'U' : el) //map digunakan untuk memetakan per isi array
//     .join('') // join digunakan untuk menggabungkan array ke bentuk string 
// }                           

//cara MAGIC
// const DNAtoRNA = (dna) => dna.replace(/T/g, 'U'); // replace untuk merubah salah satu string
//                                                    // slash g untuk membuat global(merubah banyak objek(banyak huruf T, misalnya))


function DNAtoRNA(dna){ 
    return dna.split('T').join('U') // pecah ke array tiap ketemu 'T' dan joinkan menjadi 'U'
}  

console.log(DNAtoRNA("TTGC"))