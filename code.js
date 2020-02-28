function standInLine(arr, number){
arr.push(number);
return arr.shift();
}

array=[1,2,3,4,5];
console.log("Before calling function"+JSON.stringify(array));
standInLine(array,6);
console.log("After calling function"+JSON.stringify(array));

![Annotation 2020-02-28 212150](https://user-images.githubusercontent.com/13184390/75565783-61b04380-5a70-11ea-83c8-b88f449f603d.png)
