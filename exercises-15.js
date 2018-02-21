function changeVocals (str) {
  let arr=[];
  for(let i=0;i<str.length;i++){
    arr.push(str[i]);
  }
  let word=[];
  for(let j=0;j<arr.length;j++){
    if(arr[j]==='a'){
      arr[j]='b';
    }else if(arr[j]==='i'){
      arr[j]='j';
    }else if(arr[j]==='u'){
      arr[j]='v';
    }else if(arr[j]==='e'){
      arr[j]='f';
    }else if(arr[j]==='o'){
      arr[j]='p';
    }else if(arr[j]==='A'){
      arr[j]='B';
    }else if(arr[j]==='I'){
      arr[j]='J';
    }else if(arr[j]==='U'){
      arr[j]='V';
    }else if(arr[j]==='E'){
      arr[j]='F';
    }else if(arr[j]==='O'){
      arr[j]='P';
    }
    word.push(arr[j]);
  }
  word = word.join('');
  return word;
}

function reverseWord (str) {
  let result='';
  for(let i=str.length-1; i>=0; i--){
    result+=str[i];
  }
  return result;
}

function setLowerUpperCase (str) {
  let result='';
  for(let i=0; i<str.length; i++){
    if(str[i] === str[i].toLowerCase()){
      result += str[i].toUpperCase();
    }else{
      result += str[i].toLowerCase();
    }
  }
  return result;
}

function removeSpaces (str) {
  let result = str.split(" ");
  result=result.join('');
  return result;
}

function passwordGenerator (name) {
  if(name.length<5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
  let result=changeVocals (reverseWord (setLowerUpperCase (removeSpaces (name))));
  //result = setLowerUpperCase (name);
  return result;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
