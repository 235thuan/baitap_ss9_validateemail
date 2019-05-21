let name='kacelo@gmail...com';
let pattern=/^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(.[A-Za-z0-9]+)$/;
let result=pattern.test(name);
alert(result);

let name1="@gmail.com";
let name2="ab@gmail.";
let name3="@#abc@gmail.com";