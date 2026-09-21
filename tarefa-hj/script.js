const form = document.getElementById('formUser');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nomeInput = document.getElementById('nome');
    const sobrenomeInput = document.getElementById('sobrenome');

    if(nomeInput.value.trim()===''){
        alert('O campo de nome é obrigatório');
        nomeInput.focus();
        return;
    }
    if(emailInput.value.trim()===''){
        alert('O campo de email é obrigatório');
        emailInput.focus();
        return;
    }
    if(sobrenomeInput.value.trim()===''){
        alert('O campo de sobrenome é obrigatório');
        sobrenomeInput.focus();
        return;
    }
    
    if(passwordInput.value.length < 8) {
        alert('A senha deve ter no minimo 8 caracteres');
        passwordInput.focus();
        return;
    }});