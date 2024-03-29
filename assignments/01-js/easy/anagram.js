/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length!=str2.length){
    return false;
  }
  else {
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    if(str1!=str2){
      return false;
    }else {
      return true;
    }
  }
}

module.exports = isAnagram;