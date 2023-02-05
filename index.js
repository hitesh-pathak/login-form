function matchValidStrings (str1, str2) {
    if (str1 === '' || str2 === ''){
        return false;
    }
    if (str1 === str2) {
        return true;
    }
    return false;
}

function updatePasswordInputs(passArray, errMsg, errMsgTxt) {

    const isMatchPasswords = matchValidStrings(passArray[0].value, passArray[1].value);

    if (isMatchPasswords) {
        passArray.forEach((e) => {
            e.classList.remove('error');
            e.classList.add('correct');
        })
        errMsg.textContent = '';
    }
    else {
        passArray.forEach((e) => {
            e.classList.remove('correct');
            e.classList.add('error');
        })
        errMsg.textContent = errMsgTxt;
    }
}

const passArray = document.querySelectorAll('.main-container form input[type=password]');
const errMsg = document.querySelector('.main-container form label.label.password-error');
const errMsgTxt = errMsg.textContent;

passArray.forEach((e) => {
    e.addEventListener('input', () => {updatePasswordInputs(passArray, errMsg, errMsgTxt)});
})



