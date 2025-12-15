/**
 * first create a div container
 * create all the divs inside it
 * put all the divs to flex
 * adjust the box so that the divs are 16 per row
 * and they are 16 rows
 *
 * create a class
 * let the class has the properties of a box
 *
 * For the hover effect
 * create an event listener for mouseover
 * change the background color of the box to black
 *
 * add an event listener to the whole document
 * check if the clicked element has the class
 */
let divContainer = document.querySelector("div");
divContainer.classList.add("container");
let newDiv;
for (let i = 1; i <= 256; i++) {
  newDiv = document.createElement("div");
  newDiv.classList.add("box");
  divContainer.appendChild(newDiv);
}
document.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("box")) {
    event.target.style.backgroundColor = "black";
  }
});
// document.addEventListener("mouseout", function (event) {
//   if (event.target.classList.contains("box")) {
//     event.target.style.backgroundColor = "white";
//   }
// });
