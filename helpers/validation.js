const passwordSpecialCharacters = "!@#$%^&*_\\\-=+\\\|;:/\\?<>.,\"'`~ \\[\\]\\(\\)\\{\\}";
const nameRegexBase = '[a-zA-Z]{1,63}'; //'[a-z0-9_]{1,63}';
const idRegexBase = '[0-9a-f]{8}\\-[0-9a-f]{4}\\-[0-9a-f]{4}\\-[0-9a-f]{4}\\-[0-9a-f]{12}';

const rawRegex = {
    emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phoneBasic: /^[0-9]{10}$/,
    phoneRegex: /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/,
    passwordRegex: new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[${passwordSpecialCharacters}])[a-zA-Z0-9${passwordSpecialCharacters}]{8,}$`),
    idRegex: new RegExp(`^${idRegexBase}$`, 'i'),
    nameRegex: new RegExp(`^${nameRegexBase}$`),
    urlRegex: /https?:\/\/.?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
    usernameRegex: /^[a-zA-Z0-9_-]{3,32}$/,
    nameRegexBase,
    idRegexBase
}

module.exports = {
    email: email => test(email, rawRegex.emailRegex),
    name: name => test(name, rawRegex.nameRegex),
    phone: phone => test(phone, rawRegex.phoneBasic),
    password: pass => test(pass, rawRegex.passwordRegex, true),
    username: username => test(username, rawRegex.usernameRegex),
    rawRegex
};

function test(str, regEx, caseSensitive = false) {
    if (!caseSensitive) {
        str = String(str).toLowerCase();
    }
    return regEx.test(str);
}
