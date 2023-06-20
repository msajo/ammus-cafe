cake = 0;
item_list = [];
cake_cost = "";
function add_cart(item_name,category){
    if(category == "cake"){
        cake = cake +1;
        item_list.push(item_name);
        cake_cost = cake * 20;
        console.log("cake = "+ cake);
        console.log(cake_cost);
        console.log(item_list);
        localStorage.setItem("cakes",cake);
        localStorage.setItem("cost",cake_cost);
        localStorage.setItem("array",item_list);
    }
    
    
    
}
function See_cart(){
    console.log("Window changed ");
    window.location = "cart_page.html";
}