var arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(2, 1);
console.log(arr);

//2-misol
function reverseString(suz) {
  let bolingan = suz.split(""); //bo'lib
  let reversed = bolingan.reverse(); //teskari qilib
  var ulangan = reversed.join(""); //birlashtirib
  return ulangan; //qaytar
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
