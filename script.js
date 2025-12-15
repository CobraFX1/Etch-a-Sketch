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
let button = document.createElement("button");
button.textContent = "Resize number of squares";
document.body.prepend(button);
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
/**
 * Next step
 * add a button at the top of the screen
 * on click event a popup would be sent asking for number of squares
 * once enter is clicked the existing grid would b removed
 * nw grid should be generated in the same spac
 * max should be 100
 * the elements should somehow resize
 */
