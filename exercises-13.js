/*
leftOver belum bisa
*/
function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
  let result=[];
  if(shoppers.length === 0){
    return result;
  }

  //LOOPING OBJECT
  for(let i=0; i<listBarang.length; i++){
    result.push({});
    result[i].product = listBarang[i][0];
    result[i].shoppers = [];

    let changeItem=listBarang[i][2];
    for(let j=0; j<shoppers.length; j++){
      if(shoppers[j].product === listBarang[i][0] && shoppers[j].amount <= changeItem){
        result[i].shoppers.push(shoppers[j].name)
        console.log(shoppers[j].product);
        console.log(shoppers[j].amount);
        console.log(changeItem-=shoppers[j].amount);
      }
    }
    result[i].leftOver = changeItem;
    result[i].totalProfit = (listBarang[i][2]-changeItem)*listBarang[i][1];
  }


  return result;
}

// TEST CASES
//console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
//console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
//console.log(countProfit([])); //[]
