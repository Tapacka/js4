const fs = require('fs');
let n = Math.floor(Math.random() * 1000);
var readline = require( 'readline' );
var rl = readline.createInterface(process.stdin, process.stdout);
console.log(n);
let i = 1;
function question() {
    rl.question(`угадайте число, попытка ${i} - `, (guess) => {        
        i++;
        if (isNaN(guess)) {
            console.log('Ошибка ввода. Используйте только цифры.');
            fs.writeFile('log.txt', `\nпопытка(${i-1}) ${guess} - Ошибка ввода. Используйте только цифры.`, { flag: 'a+' }, (err) => {
                if (err) {
                  console.error(err)
                  return
                }});
            question();
        } else if (guess == n) {
            console.log('угадали');
            fs.writeFile('log.txt', `\nпопытка(${i-1}) ${guess} - угадали\nИгра окончена.\n`, { flag: 'a+' }, (err) => {
                if (err) {
                  console.error(err)
                  return
                }});            
            rl.close();
        } else if (guess < n) {
            console.log('больше');
            fs.writeFile('log.txt', `\nпопытка(${i-1}) ${guess} - больше`, { flag: 'a+' }, (err) => {
                if (err) {
                  console.error(err)
                  return
                }});
            question();
        } else if (guess > n) {
            console.log('меньше');
            fs.writeFile('log.txt', `\nпопытка(${i-1}) ${guess} - меньше`, { flag: 'a+' }, (err) => {
                if (err) {
                  console.error(err)
                  return
                }});
            question();      
        }})
    }
    
fs.writeFile('log.txt', 'Новая игра.', { flag: 'a+' }, (err) => {
    if (err) {
        console.error(err)
        return
    }});    
question();



    

    