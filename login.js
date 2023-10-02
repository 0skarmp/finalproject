let btnRegister = document.querySelector('.btn_register');
let formRegister = document.querySelector('.col_1-1');
let boxLogin = document.querySelector('.col_2-1');


let btnLogin = document.querySelector('.btn_login');
let formLogin = document.querySelector('.col_1');
let boxRegister = document.querySelector('.col_2');

btnRegister.addEventListener('click', ()=> {
    formRegister.classList.add('col_1-1-change');
    boxLogin.classList.add('col_2-1-change');
    formLogin.style.display = "none";
    boxRegister.style.display = "none";
});

btnLogin.addEventListener('click', ()=> {
    formRegister.classList.remove('col_1-1-change');
    boxLogin.classList.remove('col_2-1-change');
    formLogin.style.display = "block";
    boxRegister.style.display = "flex";
});