Cakes = "";
cake_cost = "";
function back_to_home(){
    window.location = "index.html";
}
Cakes = localStorage.getItem("cakes");
cake_cost = localStorage.getItem("cost");
array = localStorage.getItem("array");
console.log(Cakes);
console.log(cake_cost);
console.log(array);
document.getElementById("amount2").innerHTML = + Cakes;
document.getElementById("cost2").innerHTML = "$"+ cake_cost;
document.getElementById("items2").innerHTML = array;

