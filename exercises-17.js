function totalDigitRekursif(angka) {
  let numStr=angka.toString();


  if(numStr.length===1){
    return angka;
  }else {
  let terakhir= numStr.slice(-1);
  let sisa= numStr.slice(0,-1);
    terakhir = parseInt(terakhir);
    sisa = parseInt(sisa);
    return terakhir + totalDigitRekursif(sisa);
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
