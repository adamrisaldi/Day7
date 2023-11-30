let kata = 'katam';
let jumlahKata = kata.length;
let a = '';

let result
for (let i = 0; i<jumlahKata ; i++) {
        if (kata[i] !== kata[kata.length-1-i]) {
            result = false;
            break;
        }
    result = true;
    }
    console.log(result);
