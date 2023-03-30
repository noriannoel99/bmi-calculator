let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let calculate = document.querySelector("#calculate-btn");
let result = document.querySelector("#bmi-advice");

calculate.onclick = function () {
  let w = parseFloat(weight.value);
  let h = parseFloat(height.value) / 100;
  let bmi = w / (h * h);
  let message = "";

  if (bmi < 18.5) {
    message = "You are underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    message = "Your weight is ideal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    message = "You are overweight";
  } else {
    message = "You are obese";
  }

  result.innerHTML = "Your BMI is " + bmi.toFixed(2) + ". " + message + ".";
};
