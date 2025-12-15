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
let numberOfSquares;
let button = document.createElement("button");
let newDiv;

divContainer.classList.add("container");
button.textContent = "Resize number of squares";
document.body.prepend(button);
for (let i = 1; i <= 256; i++) {
  newDiv = document.createElement("div");
  newDiv.classList.add("initial");
  divContainer.appendChild(newDiv);
}
document.addEventListener("mouseover", function (event) {
  if (
    event.target.classList.contains("initial") ||
    event.target.classList.contains("box")
  ) {
    event.target.style.backgroundColor = "black";
  }
});
button.addEventListener("click", () => {
  numberOfSquaresPrompt();
  if (numberOfSquares > 100) {
    alert("The maximun number should be 100");
    numberOfSquaresPrompt();
  }
  divContainer.textContent = "";
  for (let i = 1; i <= numberOfSquares * numberOfSquares; i++) {
    newDiv = document.createElement("div");
    newDiv.classList.add("box");
    sizeOfBox = 400 / numberOfSquares;
    newDiv.style.cssText = `
    width: ${sizeOfBox}px; 
    height: ${sizeOfBox}px;
    `;

    divContainer.appendChild(newDiv);
  }
});
function numberOfSquaresPrompt() {
  numberOfSquares = prompt("Enter the size of grid that you want ", "e.g 10");
}
/**
 * Next step
 * add a button at the top of the screen
 * on click event a popup would be sent asking for number of squares
 * once enter is clicked the existing grid would b removed
 * nw grid should be generated in the same spac
 * max should be 100
 * the elements should somehow resize
 */

/**
 * The last step is the hardest now
 * I need to let the elemnts resixe in that same space
 * for that I need to get the width of the container
 * then divide it by the number of squares entered
 * then set the width and height of each box to that value
 *
 * i need to remove the divContainer while appending a new one
 * i should do that while referrencing the same div in the html
 * then append the new boxes to it
 *
 * switch that i would rather empty the container instead
 *
 */
