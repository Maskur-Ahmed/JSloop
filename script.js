//*================Dom start=============
let input = document.getElementById('input');
let btn = document.getElementById('btn');
let display = document.getElementById('display');


btn.addEventListener('click',()=>{
 

display.innerHTML=''


for(i=1; i<=10; i++){
    display.innerHTML += input.value + ' x ' + i + ' = '+ input.value*i + "<br>";
}

input.value=''

})