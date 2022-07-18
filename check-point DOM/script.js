function tot1 () {

    var price1 = document.getElementById("qty1").value;
    var pricetot1 = price1 * 22 ;
    document.getElementById("tot1").value = pricetot1 ;
}
function tot2 () {

    var price2 = document.getElementById("qty2").value;
    var pricetot2 = price2 * 22 ;
    document.getElementById("tot2").value = pricetot2 ;
}

function tot () {
    document.getElementById("tot").value = parseInt(document.getElementById("tot1").value) + parseInt(document.getElementById("tot2").value);
}

function remove1 () {
    document.getElementById("card1").remove("table");
}
function remove2 () {
    document.getElementById("card2").remove("table");
}
function background1() {
    document.getElementById("h1").style.color = "red";
}
function background2() {
    document.getElementById("h2").style.color = "red";
}
function moin1 () {
    document.getElementById("qty1").value = parseInt(document.getElementById("qty1").value) - 1;
}
function moin2 () {
    document.getElementById("qty2").value = parseInt(document.getElementById("qty2").value) - 1;
}
function plus1 () {
    document.getElementById("qty1").value = parseInt(document.getElementById("qty1").value) + 1;
}
function plus2 () {
    document.getElementById("qty2").value = parseInt(document.getElementById("qty2").value) + 1;
}