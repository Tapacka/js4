const { resolve } = require('path');
var readline = require( 'readline' );
var rl = readline.createInterface(process.stdin, process.stdout);
let n = Math.floor(Math.random() * 1000);
console.log(n);
let i = 1;

function question(quest) {
    return new Promise((resolve, reject) => {
        rl.question(quest, (data) => {
            resolve(data);
        })
    })
}
async function input() {
    while (true) {
        const data = await question(`угадайте число, попытка ${i} - `);
        i++;
        if (data == n) {
            console.log('угадали');
            rl.close();
            break;
        } else if (isNaN(data)) {
            console.log('Ошибка ввода. Используйте только цифры.');
        } else if (data < n) {
            console.log('больше');
        } else if (data > n) {
            console.log('меньше');
        }
    }
}
input()
