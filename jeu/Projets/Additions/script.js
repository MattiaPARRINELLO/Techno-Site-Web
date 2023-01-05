function randomNumber() {
  let num1 = generateRandomNumber();
  let num2 = generateRandomNumber();

  if (num1 === num2) {
    num2 += 1;
  }

  document.getElementById("primaryNumber").innerHTML = num1;
  document.getElementById("secondaryNumber").innerHTML = num2;
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function checkResult() {
  let num1 = document.getElementById("primaryNumber").innerHTML;
  let num2 = document.getElementById("secondaryNumber").innerHTML;
  let result = document.getElementById("guess").value;
  let answer = eval(num1 + "+" + num2);

  if (answer == result) {
    document.getElementById("guess").style.backgroundColor = "green";
    setTimeout(() => {
      document.getElementById("guess").value = "";
      document.getElementById("guess").style.backgroundColor = "white";

      randomNumber();
    }, 1000);
  } else {
    document.getElementById("guess").style.backgroundColor = "red";

    setTimeout(() => {
      document.getElementById("guess").value = "";
      document.getElementById("guess").style.backgroundColor = "white";

      randomNumber();
    }, 1000);
  }
}
