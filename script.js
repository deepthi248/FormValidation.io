
'use strict'
//Form Validation

const First_Name = document.getElementById('first_name')
const Last_Name = document.getElementById('last_name')
const email_id = document.getElementById('e-mail');
const phone_number = document.getElementById('phoneNumber');
const submit_button = document.getElementById('btn')
const password = document.getElementById('password')
const retypePassword = document.getElementById('retype_password')

const message_firstName = document.getElementById('message_firstName')
const message_lastName = document.getElementById('message_Lastname')
const message_phone = document.getElementById('message_phone')
const message_email = document.getElementById('message_email')

let phone_valid = false;
let email_valid = false;
let password_valid = false;
let retype_valid = false;
let first_name_valid = false;
let last_name_valid = false;


function validate() {
    if (phone_valid && email_valid && phone_valid && first_name_valid && last_name_valid && password_valid)
        alert('form submitted Succesfully')
    else {
        if (!First_Name.value)
            First_Name.classList.add('InValid')
        if (!Last_Name.value)
            Last_Name.classList.add('InValid')
        if (!phone_number.value)
            phone_number.classList.add('InValid')
        if (!email_id.value)
            email_id.classList.add('InValid')
        if (!retypePassword.value)
            retypePassword.classList.add('InValid')
        if (!password.value)
            password.classList.add('InValid')
        Passwordvalidate()
    }
    validate_change();
}
function validate_change() {
    if (First_Name.value) {
        First_Name.classList.add('Valid')
        first_name_valid = true;
    }
    if (Last_Name.value) {
        Last_Name.classList.add('Valid')
        last_name_valid = true;
    }
    Passwordvalidate()
}

phone_number.addEventListener('change', function () {
    const phoneReg = /^[7-9]\d{9}$/;
    const phoneNumber = phone_number.value;
    if (validate_regex(phoneReg, phoneNumber)) {
        phone_number.classList.add('Valid');
        phone_valid = true;
    }
    else {
        phone_number.classList.add('InValid');
        phone_valid = false
        message_phone.innerHTML = "Should be number of length 10 and starting with 7,8,9";
    }

});

email_id.addEventListener('change', function () {
    const regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})$/;
    if (validate_regex(regex, email_id.value)) {
        email_id.classList.add('Valid');
        email_valid = true;
    }
    else {
        phone_valid = false
        email_id.classList.add('InValid');
        message_email.innerHTML = "InValid e-mail Id -- should contain @ , . "
    }
})
function validate_regex(pattern, value) {
    return (pattern.test(value))
}

if (retypePassword.value) {
    Passwordvalidate();
}

password.addEventListener('change', () => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    if (validate_regex(regex, password.value)) {
        password.classList.add('Valid')
    }
    else {
        document.getElementById('message_password').innerHTML = "Password should be of minimum 8 characters. Include a number, special character and letters"
        password.classList.remove('Valid')
        password.classList.add('InValid')
        password = false;
    }

})
retypePassword.addEventListener('change', () => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    if ((retypePassword.value === password.value)) {
        retypePassword.classList.add('Valid')
        password.classList.add('Valid')
        document.getElementById('message_password').innerHTML = ""
        password_valid = true;
    }

    else {
        password_valid = false;
        document.getElementById('message_retypepassword').innerHTML = "Password and Re-entered password does not match"

    }
}

);


function Passwordvalidate() {
    if (retypePassword.value == "" && retypePassword != "") {
        retypePassword.classList.add('InValid')
        password.classList.add('InValid')
        password_valid = false;
    }
}







