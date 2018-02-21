function kaliTerusRekursif(angka) {
  let str=angka.toString();
  if(str.length===1){
    return angka;
  }else{
    let num=1;
    for(let i=0;i<str.length;i++){
      num = num * parseInt(str[i]);
    }
    num = num.toString();
    if(num.length === 1){
      return parseInt(num)
    }else{
      let lastNum = num.slice(-1);
      let changeNum = num.slice(0,-1);
      lastNum = parseInt(lastNum);
      changeNum = parseInt(changeNum);
      return lastNum * kaliTerusRekursif(changeNum);
    }
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
