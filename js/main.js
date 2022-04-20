var arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(2, 1);
console.log(arr);

//2-misol
function reverseString(str) {
  let splittedString = str.split(""); //bo'lib
  let reverseArray = splittedString.reverse(); //teskari qilib
  var joinArray = reverseArray.join(""); //birlashtirib
  return joinArray; //qaytar
}

console.log(reverseString("saloom alekum"));

//3-misol

let numb = Number(prompt("son kiriting"));

function oddOrEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(oddOrEven(numb));
