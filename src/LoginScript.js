function authentication(){
    let login = document.getElementById('emailAut').value;
    let senha = document.getElementById('senhaAut').value;

    if (login == "admin@admin.com" && senha == "admin") {
        location.href = "homepage.html";
        alert('Seja Bem-Vindo(a) ao Health Track');
    }else{
        alert('E-mail ou senha incorreto!');
        location.href("Login.html");
    }
}