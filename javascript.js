const btn = document.getElementById("click");
btn.style.backgroundColor = "pink";
btn.style.border = "none";



function remove() {

    const img = document.querySelector(".img");
    const titl = document.querySelector(".card-title");
    const desc = document.querySelector(".card-text");
    const btn = document.querySelector(".clickH")
    img.remove();
    titl.remove();
    desc.remove();
    btn.remove();
    const sec = document.querySelector(".card-body")
    const newE = document.createElement("h1").value = "Haballlllllllllllllooooooooooooo ";
    sec.append(newE);
    const content = document.querySelector("h2");



}
