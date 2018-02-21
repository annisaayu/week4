function changeMe(arr) {
  let arrLen=arr.length;
  if(arrLen===0){
    console.log("");
  }else{
    for(var i=0; i<arrLen;i++){
      var data={};
      data.FirsName = arr[i][0];
      data.lastName = arr[i][1];
      data.gender = arr[i][2];
      //data.age= 2018-arr[i][3];
      if(arr[i][3]!== undefined){
        data.age= 2018-arr[i][3];
      }else{
        data.age= 'INVALID BIRTH YEAR';
      }
    console.log(data);
    }
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
