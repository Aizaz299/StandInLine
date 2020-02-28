function standInLine(arr, number){
arr.push(number);
return arr.shift();
}

array=[1,2,3,4,5];
console.log("Before calling function"+JSON.stringify(array));
standInLine(array,6);
console.log("After calling function"+JSON.stringify(array));
