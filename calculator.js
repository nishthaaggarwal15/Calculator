var keys = document.querySelectorAll("#keyboard>div")
var bag= "";

for ( var i = 0;i<keys.length; i++) {
keys[i].addEventListener("click", Mycalculator )

}
console.log(keys)
function Mycalculator(e){

var targetNumber= e.target.innerText;

console.log(bag)
if(targetNumber=="C"){
document.getElementById("display").innerText=""

}
else if(targetNumber=="="){
document.getElementById("display").innerText= eval(bag)

}

else{
bag= bag+targetNumber
document.getElementById("display").innerText= bag


}

}