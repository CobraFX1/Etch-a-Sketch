/**
 * first create a div container
 * create all the divs inside it 
 * put all the divs to flex
 * adjust the box so that the divs are 16 per row 
 * and they are 16 rows
 * 
 * create a class 
 * let the class has the properties of a
 */
let divContainer = document.querySelector("div");
let div1 = document.createElement("div");
divContainer.classList.add("container");
for (let i = 1; i <= 256; i++){
    let newdiv = document.createElement("div");
    newdiv.classList.add("box");
    divContainer.appendChild(newdiv);
}