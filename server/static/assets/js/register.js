var registerDom = {
    "submit": document.getElementById("submit"),
    "username": document.getElementById("username"),
    "password": document.getElementById("password"),
    "description": document.getElementById("description"),
    "errorDiv": document.getElementById("errorDiv")
};

var validateFuncs = {
    "onlyNumberAndLetters": function onlyNumberAndLetters(input) {
        return /^[a-z0-9]+$/i.test(input);
    },
    "onlyNumber": function onlyNumber(input) {
        return /^[0-9]+$/i.test(input);
    },
    "onlyLetters": function onlyLetters(input) {
        return /^[a-z]+$/i.test(input);
    }
};

function registerRun() {
    registerDom.submit.addEventListener('click', function(event) {
        event.preventDefault();
        clearError();
        var msgs = [];
        validateUsername(msgs);
        validatePassword(msgs);
        dispError(msgs)
        if (msgs.length === 0) {
            alert("Register successfully! " + "username: " + registerDom.username.value + ", password: " + registerDom.password.value);
        }
    });
}

function validateUsername(msgs) {
    var username = registerDom.username.value;
    if (username.length <= 4 || username.length >= 20) {
        msgs.push("Username length should be between 5 and 20.");
    }

    if (!validateFuncs.onlyNumberAndLetters(username)) {
        msgs.push("Username can only be numbers and letters.");
    }
}

function validatePassword(msgs) {
    var password = registerDom.password.value;
    if (password.length <= 7 || password.length >= 20) {
        msgs.push("Password length should be between 8 and 20.");
    }
    if (!validateFuncs.onlyNumberAndLetters(password)) {
        msgs.push("Password can only be numbers and letters.");
    }
    if (validateFuncs.onlyLetters(password)) {
        msgs.push("Password need contain numbers.");
    }
    if (validateFuncs.onlyNumber(password)) {
        msgs.push("Password need contain letters.");
    }
}

function dispError(msgs) {
    var innerhtml = "";
    for (var i = 0; i < msgs.length; i++) {
        innerhtml = innerhtml + "<div>" + msgs[i] + "</div>"
    }
    registerDom.errorDiv.innerHTML = innerhtml;
}

function clearError() {
    registerDom.errorDiv.innerHTML = "";
}

registerRun();