var submitbutton = document.getElementById("submit");
var clearbutton = document.getElementById("clear");
var celcius = document.getElementById("toC");
var fahrenheit = document.getElementById("toF");

function toF(temp) {
    temp = (temp * 9 / 5) + 32;
    temp = Math.round(temp);
    return temp;
}

function toC(temp) {
    temp = (temp - 32) * 5 / 9;
    temp = Math.round(temp);
    return temp;
}


function temp() {
    var userInput = Math.round(document.getElementById("usertemp").value);
    userInput = parseInt(userInput);
    var convertedInput = document.getElementById("converted-temp");

    if (celcius.checked) {
        convertedInput.value = toC(userInput);
        if (convertedInput.value >= 32) {
            convertedInput.style.color = "red";
          } else if (convertedInput.value <= 0) {
              convertedInput.style.color = "blue";
          } else if (convertedInput.value > 0 && convertedInput.value < 32)
            {
              convertedInput.style.color = "green"
          }
    } else if (fahrenheit.checked) {
        convertedInput.value = toF(userInput);
      if (convertedInput.value >= 90) {
            convertedInput.style.color = "red";
        } else if (convertedInput.value <= 32) {
            convertedInput.style.color = "blue";
        } else if (convertedInput.value > 32 && convertedInput.value < 90)
          {
            convertedInput.style.color = "green"
        }
    }
}

document.getElementById("usertemp").addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        submitbutton.click();
    }
});

function clear() {
  document.getElementById("usertemp").value = "";
  document.getElementById("converted-temp").value = "";
}


submitbutton.addEventListener("click", temp);
clearbutton.addEventListener("click", clear);
