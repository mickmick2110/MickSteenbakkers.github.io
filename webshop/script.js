var doritoStock = 20;
var ratStock = 30;

function buyDoritos(){
    doritoStock = doritoStock-1;

    if (doritoStock === 0){

        document.getElementById("doritoStock").innerText = "Out of stock :(";
        document.getElementById("doritoButton").style.display = "none";
    }
    else{
        
        document.getElementById("doritoStock").innerText = "In stock: " + doritoStock;
    }
    
}