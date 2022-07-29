let heartColor = document.getElementsByClassName("heart")
        for (const el of heartColor) {
            el.addEventListener("click", function(){
                if (el.style.color == "red") {
                    el.style.color = "black"
                }else {
                    el.style.color = "red"
                }
            })
        }

        function sumTotal () {
            let qteV = document.getElementsByClassName("qte");
            let prixV = document.getElementsByClassName("priceVape");
            let prixT = document.getElementsByClassName("totalPrice");
                 for (let i = 0; i < qteV.length; i++) {
                  let  sumT = parseInt(prixV[i].innerText) * qteV[i].value
                prixT[i].innerHTML =  sumT ;
             }
        }

        let btnMinus = document.getElementsByClassName("minus")

        for (const el of btnMinus) {
            el.addEventListener("click" , function(){
                if (el.nextElementSibling.value == 0){
                    return;
                }else {
                el.nextElementSibling.value--
                sumTotal ()
            }
            })
           
            }
        
    let btnPlus = document.getElementsByClassName("plus")

        for (const el of btnPlus) {
            el.addEventListener("click" , function(){
                el.previousElementSibling.value++;
                sumTotal ()
            })
            
        }

        let btnAdd = document.getElementsByClassName("btnadd");
        for (let i = 0; i < btnAdd.length; i++) {
            btnAdd[i].addEventListener("click",function(){
                
                let titV = document.getElementsByClassName("titleV")[i].innerHTML;
                let priV = document.getElementsByClassName("priceVape")[i].innerHTML;
                let totV = document.getElementsByClassName("totalPrice")[i].innerHTML;
                let sumt = document.getElementById("price-tot") ;
                if (totV == "0") {
                    alert ("Please choose product")
                }else{
                    
                
        var divtest= document.createElement("div");
        let nevButt = document.createElement ("button");
        nevButt.textContent = "remove"
        nevButt.setAttribute("class", "remove");

        divtest.setAttribute("class", "divT mt-1") ;
        
        divtest.innerHTML = `<div class="divt"> ${titV} </div> <div class="divt"> ${priV} </div> <div class="divt"> ${totV} dt </div>`;
        divtest.appendChild(nevButt)
        document.getElementById("addcard").appendChild(divtest);

        sumt.innerHTML = parseInt(sumt.innerHTML) + parseInt(totV)

        nevButt.addEventListener("click",function () {
            divtest.remove()
            let sumt = document.getElementById("price-tot") ;
            sumt.innerHTML = parseInt(sumt.innerHTML) - parseInt(totV)
        })
    }
            })
         
        }

        