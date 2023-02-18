const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
console.log(height, weight);
weight.addEventListener("input", (e) => {
  console.log(e.target.value);
});
height.addEventListener("input", (e) => {
  console.log(e.target.value);
});
