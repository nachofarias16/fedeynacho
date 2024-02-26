var login = document.getElementById('login');
var formulario = document.getElementById('formulario');
var close_login = document.getElementById('close-login');
var sign_in = document.getElementById('sign_in');
var nombre = document.getElementById('usuario');
var password = document.getElementById('password');

login.addEventListener('click', function(){
    formulario.style.display='block';
    login.style.display='none';
});

close_login.addEventListener('click', function(){
    formulario.style.display='none';
    login.style.display='block';
});

sign_in.addEventListener('click', function(){
    username = nombre.value;
    pass = password.value;
    console.log(username);
    console.log(pass);
    nombre = nombre.value = "";
    password = password.value = "";
});