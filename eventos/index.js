let btn1 = document.querySelector("#btn1")

teste = () => {
    console.log("Clicou no botão");
}
btn1.addEventListener("click", teste)

const clicou = () => console.log("clicou para remover");
btn2.addEventListener("click", () => {
    clicou()
    btn1.removeEventListener("click", teste)
})

//propagação

let p = document.getElementById("propa");



function msg(event) {
    event.stopPropagation();
    console.log("Clicou no botão");
}

let quartobtn = document.createElement("button");

quartobtn.addEventListener("click", msg)
quartobtn.innerText = "botão da propagação"
p.appendChild(quartobtn)

p.addEventListener("click", (event) => {
    console.log("Clicaram no P");
})

//previnindo comportamento padrão
let link = document.querySelector("a");
link.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("Faça nada");
})

window.addEventListener('mousedown', () => {
    console.log("baixou");
})
window.addEventListener('mouseup', () => {
    console.log("soltou");
})

//window.addEventListener("mousemove", (e) => {
    //console.log("vertical: \t", e.y);
  //  console.log("horizontal: \t", e.x);
//})

window.addEventListener("scroll", () => {
    if (window.scrollY >1000) console.log("scroll vertical", window.scrollY);
})

let input = document.querySelector("input");
input.addEventListener('focus', () => {
    console.log("fui focado");
})

input.addEventListener ('blur', () => {
    console.log("fui desFOCAdo");
})

window.addEventListener ('load', () => {
    alert('NOBODY SHOULD BE READING IT')
})
