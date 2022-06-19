function getPasswordChecker(password) {
    return function PasswordChecker(pass) {
        if (pass === password) {
            return true;
        } else return false;
    }
}

p1 = getPasswordChecker('1234REWQ!@#$');

console.log(p1('1234REWQ!@#$'));
console.log(p1('1q2w3e'));
