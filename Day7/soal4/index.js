let angka = 56;
let angkaPalindromeSelanjutnya = cekPalindrome(angka);

function isPalindrome(a) {
    let angkaString = a.toString();
    let panjang = angkaString.length;
    for (let i = 0; i < Math.floor(panjang / 2); i++) {
      if (angkaString[i] !== angkaString[panjang - 1 - i]) {
        return false;
      }
    }
    return true;
}

function cekPalindrome(a) {
    a++;
    while (!isPalindrome(a)) {
      a++;
    }
    return a;
}

console.log(angkaPalindromeSelanjutnya);
