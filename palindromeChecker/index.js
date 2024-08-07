let palindrome;
let og;
let palArray;
let reverse;
let check = document.getElementById("check-btn");
let result = document.getElementById("result");

check.addEventListener("click", function() {

  palindrome = document.getElementById("text-input").value;
  if (palindrome === '') {
    alert("Please input a value");
  }

  og = palindrome;
  palindrome = palindrome.toLowerCase();

  palArray = palindrome.match(/[a-z0-9]/g);

  palindrome = palArray.join('');

  reverse = palArray.reverse().join('');

  if (reverse === palindrome) {
    result.innerHTML = `${og} is a palindrome`
  }
  else {
    result.innerHTML = `${og} is not a palindrome`
  }
});