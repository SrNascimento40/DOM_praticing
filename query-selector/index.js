console.log(document.getElementById("primeiroh1").innerText);
console.log(document.getElementById("paragrafo").textContent);

console.log(document.getElementsByTagName("h1")[0].firstChild);

console.log(document.getElementsByClassName("primeiroh1"))

console.log(document.querySelector("#lista").childNodes)

let novoParagrafo = document.createElement("p");
let textoNovo = document.createTextNode("Algum exemplo")
novoParagrafo.appendChild(textoNovo)
let paragrafoNaDiv = document.querySelector("#segundiv p")
let elementoPai = document.querySelector("#segundiv")

elementoPai.insertBefore(novoParagrafo, paragrafoNaDiv)
//criar item
let novoItemLista = document.createElement("li");
//adicionar texto
let textoDaLi = document.createTextNode("Caju");
//adicionou texto no item da lista
novoItemLista.appendChild(textoDaLi);
//adicionou o item na ol
document.getElementById("lista").appendChild(novoItemLista)
