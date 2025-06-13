function somar(){
  
    // var ipt_X;
    // ipt_X = document.getElementById("iptX");
    var x = parseInt(document.getElementById("iptX").value);
    var y = parseInt(document.getElementById("iptY").value);

    var spnRes = document.getElementById("bloc3");

    var res = x + y;

    // alert(res);

    spnRes.innerHTML = "O resultado é: "+res;

    
    if (res % 2 === 0){
        spnRes.style.backgroundColor = "green";
        spnRes.style.color = "white";

    } else {
        spnRes.style.backgroundColor = "gray";
        spnRes.style.color = "black";
    }

    // spnRes.style.transform = "translate3d(40px, 30px, 0)";

}

function eixo() {
    var eixoX = parseInt(document.getElementById("eixoX").value);
    var eixoY = parseInt(document.getElementById("eixoY").value);

    var mostrar = document.getElementById("bloc3");

    mostrar.style.transform = `translate3d(${-eixoX}px,${-eixoY}px,0)`;
    // div.style.left = `${parseint(x)}px`;
    // div.style.top = `${parseint(y)}px`;

    
}

    // if (r % 2 == 0){
    //     br.style.backgroundColor = "green";
    // } else {
    //     br.style.backgroundColor = "gray";
    // }

   // br.style.bottom = r + "px";

//     spnRes.innerHTML = r;
// }
