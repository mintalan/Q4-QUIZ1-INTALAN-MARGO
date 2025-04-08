
  function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var bmi = weight / (height * height);
    var result = "";

    if (bmi < 18.5) {
      result = "Underweight";
    } else if (bmi <= 24.9) {
      result = "Normal weight";
    } else if (bmi <= 29.9) {
      result = "Overweight";
    } else {
      result = "Obese";
    }

    document.getElementById('bmio').innerHTML = 
      "Your BMI is: " + bmi.toFixed(2) + " (" + result + ")";
  }
