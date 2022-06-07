// const palindromes = ["racecar", "deed", "hannah"];
const testStr = "racecar";
const isCharEqual = (leftChar, rightChar) => leftChar === rightChar;

const oddPalindrome = (str) => {
  const strLen = str.length;
  for (let i = 0; i < strLen; i++) {
    const startChar = str[i];
    const endChar = str[strLen - i - 1];
    const reachedCenterChar = i === (strLen - i - 1);

    if (reachedCenterChar) {
      console.log("Is a palindrome!");
      break;
    }

    if (isCharEqual(startChar, endChar)) continue;

    console.log("Not a palindrome!");
    break;
  }
};

const evenPalindrome = (str) => {
  const strLen = str.length;
  for (let i = 0; i < strLen; i++) {
    const startChar = str[i];
    const endChar = str[strLen - i - 1];
    const reachedCenterChars = i === strLen / 2 - 1;

    if (reachedCenterChars && isCharEqual(startChar, endChar)) {
      console.log("Is a palindrome");
      break;
    }

    if (isCharEqual(startChar, endChar)) continue;

    console.log("Not a palindrome");
    break;
  }
};

if (testStr.length % 2 === 1) {
  oddPalindrome(testStr);
} else {
  evenPalindrome(testStr);
}
