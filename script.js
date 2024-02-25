function getData() {
  const inputData = document.getElementById("text-input").value;
  if (inputData.length == 0) {
    alert("Please input a value");
    return;
  }
  const result = document.getElementById("result");
  const button = document.getElementById("check-btn");
  let res = checkPalindrome(inputData);
  if (res == true) {
    result.innerHTML = inputData + " is a palindrome";
  } else {
    result.innerHTML = inputData + " is not a palindrome";
  }
}

function checkPalindrome(string) {
  let text = string.toLowerCase();
  text = text.replaceAll(/ /gi, "");
  text = text.replaceAll(/[^a-z|0-9]/gi, "");
  console.log(text);
  if (text.length == 1) {
    return true;
  }
  let firstPoint = 0;
  let lastPoint = text.length - 1;
  while (lastPoint > firstPoint) {
    if (text[firstPoint] != text[lastPoint]) {
      return false;
    }
    firstPoint++;
    lastPoint--;
  }
  return true;
}
