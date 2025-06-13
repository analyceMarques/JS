function imprimirMensagem(){
    const qtd = parseInt(document.getElementById("iptQtd").value);

    var container = document.createElement("div");
    container.setAttribute("id","container"); //setAttribute ele nao explicou
    container.style.width = "80%";
    container.style.height = "500px";
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.border = "2px solid black";
    
    
    var k;
    for(k=0; k<qtd; k++){ //for(k=1; k>=qtd; k++) vai mudar a ordem, agr ele vai comecar no "1" e terminar no numero exato escolhido.

        var box = document.createElement("div");

        box.style.width = "100px";
        box.style.height = "100px";
        box.style.backgroundColor = (k%2==0)?"green":"red";
        box.style.border = "1px solid black";
        box.style.margin = "10px";
        box.style.fontSize = "300%";
        box.style.fontWeight = "bold";
        box.style.display = "flex";
        box.style.alignItems = "center";
        box.style.justifyContent = "center";

        box.textContent = k; //copia oq exatemnte esta no codigo, joga tudo pra la. ex.: 
        //index                    js                                    vai jogar tudo pro site
        //<span> ... </span>        span.textContent="<p> OI </p>"

        container.appendChild(box);// funconando como heranca, como se fosse o filho do container


        // var p = document.createElement("p");
        
        // p.style.color = (k%2==0)?"green":"red";

        // p.textContent = "Olá Mundo";

        // document.querySelector("body").appendChild(p);
    
    } 
    
    document.querySelector("body").appendChild(container);
    

}


function apagar(){
    var container = document.getElementById("container");
    container.remove();


    var d = document.getElementById("agua");

    d.removeC();

}

function remover(){

    const idParaRemover = parseInt(document.getElementById("Id").value);
    const container = document.getElementById("container");
    
    if (container) {
        for (let i = 0; i < container.children.length; i++) {
            const box = container.children[i];
            if (parseInt(box.textContent) === idParaRemover) {
                container.removeChild(box);
                break;
            }
        }
    }
}
