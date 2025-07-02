function BobEsponja(){
    const bob = document.createElement("button");
    bob.textContent = "Vermelho";
    bob.setAttribute("id", "esponja");
    bob.setAttribute("type", "button");
    bob.addEventListener("click",vermelho);
    
    document.querySelector("body").appendChild(bob);
}

function vermelho(){
    document.querySelector("body").style.backgroundColor = "red";

    mudarBotao();
}

function mudarBotao() {
    var esponja = document.getElementById("esponja");
 

    if(esponja.textContent == "Vermelho"){
        esponja.removeEventListener("click", vermelho);
        esponja.textContent = "Verde";
        esponja.addEventListener("click", verde);   
    } else if (esponja.textContent == "Verde"){
        esponja.removeEventListener("click", verde);
        esponja.textContent = "Vermelho";
        esponja.addEventListener("click", vermelho);  
    }

    
}

function verde(){
    document.querySelector("body").style.backgroundColor = "green";

    mudarBotao();
}

