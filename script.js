var login = document.getElementById('login');
var formulario = document.getElementById('formulario');
var close_login = document.getElementById('close-login');
var sign_in = document.getElementById('sign_in');

login.addEventListener('click', function(){
    formulario.style.display='block';
    login.style.display='none';
});

close_login.addEventListener('click', function(){
    formulario.style.display='none';
    login.style.display='block';
});

sign_in.addEventListener('click', function(){
    var nombre = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;
    console.log(nombre)
    console.log(password)
});