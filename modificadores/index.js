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

let elementoP = document.getElementById("paragrafo");
let paiDoElementoP = elementoP.parentNode;

let novoSpan = document.createElement("span");
let textoSpan = document.createTextNode("Novo Span")
novoSpan.appendChild(textoSpan)

paiDoElementoP.replaceChild(novoSpan, elementoP)


let link = document.querySelector("a");
console.log("HREF:", link.href);

link.setAttribute("href", "https://www.linkedin.com/in/wallace-nascimento040/")

//altura + largura

let primeirohum = document.getElementById("primeiroh1");

console.log("Largura:\t", primeirohum.clientWidth);
console.log("Altura:\t", primeirohum.clientHeight);

//esse leva em consideração a borda
console.log("Largura:\t", primeirohum.offsetWidth);
console.log("Altura:\t", primeirohum.offsetHeight);

//alterando CSS com JavaScript

//primeirohum.style.color = "red";
setTimeout(() => {
    primeirohum.style.color = "blue";
    primeirohum.style.backgroundColor = "orange"
}, 2000)

let todosElementos = document.querySelectorAll("li")
console.log(todosElementos);
todosElementos[2].style.color = "pink"


//Criando e removendo elementos 