

    let nome = document.getElementById('nameInput');
    let sobrenome= document.getElementById('sobrenomeInput');
    let email = document.getElementById('emailInput');
    let senha = document.getElementById('senhaInput');
    let telefone = document.getElementById('telefoneInput');
    let cep = document.getElementById('cepInput');
    let divSenha= document.getElementById('senha');


    let tudoCerto;

    function verificar() {
        tudoCerto=true;

    if(nome.value ==""){
        nome.style.borderColor ="red";
        tudoCerto = false;
    }

    if(sobrenome.value ==""){
        sobrenome.style.borderColor ="red";
        tudoCerto = false;
    } 

    if(email.value =="" || email.value.indexOf('@') ==-1 || email.value.indexOf('.com') ==-1){
        email.style.borderColor ="red";
        tudoCerto = false;
    }

    if(senha.value =="" || senha.value.length < 8){
        senha.style.borderColor ="red";
        tudoCerto = false;
    }

    if(telefone.value ==""){
        telefone.style.borderColor ="red";
        tudoCerto = false;
    }

    if(cep.value.length < 8){
        cep.style.borderColor ="red";
        tudoCerto = false;
    }

    if(tudoCerto ==true){
        nome.value ="";
        sobrenome.value= "";
        email.value= "";
        senha.value= "";
        telefone.value="";
        cep.value="";
        nome.style.borderColor= "rgb(0, 0, 0)";
        sobrenome.style.borderColor= "rgb(0, 0, 0)";
        email.style.borderColor= "rgb(0, 0, 0)";
        senha.style.borderColor= "rgb(0, 0, 0)";
        telefone.style.borderColor= "rgb(0, 0, 0)";
        cep.style.borderColor= "rgb(0, 0, 0)";
    } 
    }
        
    

    
    

/*criar uma variavel verdadeira ou falsa e caso ela seja verdadeira limpar todos os campos, se não for, não limpar.borderColor*/

/* algo como
 if(tudoCerto == true){
             resetar inputs
        
    
    }
    }*/
    



