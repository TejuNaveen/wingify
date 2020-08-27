var form = document.getElementById('loginForm');
var checkbox = document.querySelector(".checkbox");
var close = document.querySelector('.close');
var name, email;
var modal = document.querySelector('.modal')
var btn = document.querySelector('.openModal')

btn.style.display = "none"
function validation(event){
    event.preventDefault();
    name = document.querySelector('.name').value;
    email = document.querySelector('.email').value;
    
    if(email !== '' && checkbox.checked){
        setCookie('email', email)
        closePopup();
        document.querySelector('.error-text').innerHTML = ''
    }
    else{
        document.querySelector('.error-text').innerHTML = 'please fill the values'
    }
}

function closePopup(){
    modal.style.display = 'none';
    form.reset();
    btn.style.display = "block"
    document.querySelector('.error-text').innerHTML = ''
}

function openModal(){
    modal.style.display = 'flex';
    delete_cookie('email');
    form.reset();
}

function setCookie(email, value){
    document.cookie = email + '=' + "email" + "=" + value + "; path=/; ";
 }

function delete_cookie(email) {
    document.cookie = email + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

if(window.innerWidth < 767){
    modal.style.display = 'none';
    setTimeout(()=> {
        modal.style.display = 'flex';
    }, 5000)
}

