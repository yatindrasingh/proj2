const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const text = document.querySelector(".gre");
const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRnadom()];
  }
  text.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
function getRnadom() {
  return Math.floor(Math.random() * hex.length);
}
