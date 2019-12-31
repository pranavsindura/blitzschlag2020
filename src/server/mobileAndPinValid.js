async function phonenumber(inputtxt) {
    var phoneno = /^\d{10}$/;
    if (inputtxt.match(phoneno))
        return true;
    else {
        if (inputtxt[inputtxt.length - 11] === '0') {
            return true;
        } else {
            return false;
        }

    }
}

async function validatePIN(pin) {
    if (pin.length !== 4 && pin.length !== 6) {
        return false;
    }
    for (let i = 0; i < pin.length; i++) {
        if (pin[i] > '9' || pin[i] < '0') {
            return false;
        }

    }
    return true;
}

module.exports = {
    phonenumber,
    validatePIN
}