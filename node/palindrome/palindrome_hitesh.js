// const palindromes = ["racecar", "deed", "hannah"];
const str = "hannah";
const strLen = str.length;

let reverseStr = "";
for (let i = strLen - 1; i >= 0; i--) {
  reverseStr += str[i];
}

if (reverseStr === str) {
  console.log("Is a palindrome");
} else {
  console.log("Not a palindrome");
}
