let listaNum = [];
let novoNum = document.getElementById("txtn");
let tab = document.getElementById("tab");
let input = document.getElementById("txtn"); 
let res = document.getElementById("res");
let final = document.getElementById("finalizar");

    function adicionar(){
        if(isNumero(novoNum.value) && !inLista(novoNum.value, listaNum)){
            let item = document.createElement("option");
            item.text = `Valor ${novoNum.value} foi adicionado`
            tab.appendChild(item);
            listaNum.push(Number(novoNum.value))
            res.innerHTML = "";
        } else {
            alert("Valor inválido ou já encontrado na lista.")
        }
        input.value = "";
        input.focus();
    }
    function finalizar(){
        if (listaNum.length == 0){
            alert("A lista está vazia, insira ao menos 1 valor antes de finalizar !")
        } else {
            let total = listaNum.length;
            let maior = listaNum[0];
            let menor = listaNum[0];
            let somaValores = 0;
            for(let pos in listaNum){
                somaValores += listaNum[pos]
                if(listaNum[pos] > maior)
                    maior = listaNum[pos];
                if(listaNum[pos] < menor)
                  menor = listaNum[pos]; 
            } 
            let mediaValores = somaValores / (listaNum.length);
            res.innerHTML += `<p>O maior valor informado é ${maior}.</p>`
            res.innerHTML += `<p>O menor valor informado é ${menor}.</p>`
            res.innerHTML += `<p>Ao todo, temos ${total} valores cadastrados.</p>`
            res.innerHTML += `<p>Somando todos os valores, temos ${somaValores}.</p>`
            res.innerHTML += `<p>A média dos valores digitados é ${mediaValores}.</p>`
    }
 }
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    } else {
        return false;
    }
}
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true;
    } else {
        return false;
    }
}

