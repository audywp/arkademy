function userNameValidation(username){
    const getFirstValue = username[0]
    const getLastValue = username[username.length-1]
    
    if (username.match(/^[0-9][a-z]{5,8}[0-9]$/) && getFirstValue == getLastValue) {
        return true;
    }else{
        return false;
    }
}

function passwordValidation(password){
    const passNumber = password.match(/[0-9]+/)[0].length
    const passString = password.match(/[a-z]+/)[0].length
    
    if (password.match(/^(?=.{0,}[0-9])[a-z0-9\W]{7,11}$/) && password.match(/\-{0,}/) && passNumber == passString) {
        return true
    }else{
        return false
    }
}

console.log(userNameValidation('1asdas1'))
console.log(passwordValidation("1333-asas"))


