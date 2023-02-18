const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];
const imc = document.querySelector("#imc");
const interpretation = document.querySelector("#interpretation");
const from = document.querySelector("form");
const inputs = document.querySelectorAll("input");

from.addEventListener("submit", handleForm);
function handleForm(e) {
  e.preventDefault();
  calculateBMI();
}
function calculateBMI() {
  const height = inputs[0].value;

  const weight = inputs[1].value;
  console.log(height, weight);
  if (!height || !weight || height <= 0 || weight <= 0) {
    handleError();
    return;
  }
  const bmi = weight / Math.pow(height / 100, 2).toFixed(1);
  console.log("lol", bmi);
  showResult(bmi);
}

function handleError() {
  imc.textContent = "Oops";
  imc.style.color = "inherit";
  interpretation.textContent = "Remplissez correctement les champs de texte";
}

function showResult(BMI) {
  const rank = BMIData.find((data) => {
    if (BMI >= data.range[0] && BMI <= data.range[1]) return data;
    else if (typeof data.range === "number" && BMI >= data.range) return data;
  });
  imc.textContent = BMI;
  imc.style.color = `${rank.color}`;
  interpretation.textContent = `Resultat : ${rank.name}`;
}
