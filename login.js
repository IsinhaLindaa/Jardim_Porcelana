const form = document.getElementById("formLogin");

form.addEventListener("submit",(event)=>{
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if(!email.includes("jardim_porcelana@gmail.com") || !senha.includes("1234")){
        event.preventDefault();
        alert("email e senha invalidos");
        return;
    }
});
