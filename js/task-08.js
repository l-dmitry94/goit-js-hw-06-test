const loginForm = document.querySelector(".login-form");
const email = loginForm.querySelector("input[name='email']");
const password = loginForm.querySelector("input[name='password']");
const LOCALSTORAGE_KEY = "login-form-data";

const sendLoginForm = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const user = {
        email: form.elements.email.value,
        password: form.elements.password.value
    }
    
    if(!user.email || !user.password) {
        return alert("Всі поля повинні бути заповнені!");
    }

    else {
        console.log(user);
        saveFormData(user);
    }

    loginForm.reset();
}

const saveFormData = object => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(object));
}

const restoreFormData = () => {
    const currentFormData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    email.value = currentFormData.email;
    password.value = currentFormData.password;
}

loginForm.addEventListener("submit", sendLoginForm);
restoreFormData();