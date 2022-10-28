function myClick(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    
    let soma = parseInt(n1) + parseInt(n2);
    
    let vazio = false;
    
    if((soma/2) > 7 && (soma/2) < 10){
        alert("Aprovado");
    }else if((soma/2) < 7){
        alert("Reprovado");
    }else if((soma/2) == 10){
        alert("Aprovado com êxito");
    }else{
        alert("Valor informado errado");
    }
}

function myClick2(){

    var formulario = document.getElementById("formulario");	

        
    var kilos  		= parseFloat(formulario.kilos.value);
    var metros 		= parseFloat(formulario.metros.value);
    var centimetros = parseFloat(formulario.centimetros.value);


    var altura = (metros * 100 + centimetros) / 100;
    

    var imc = kilos / (altura * altura);

    formulario.imc.value = imc.toFixed(2);

    if(imc < 20){
        alert('Situação: Você esta abaixo do peso!');
    } else if(imc > 20 && imc <= 25){
        alert('Situação: Peso Ideal');
    }else if(imc > 25 && imc <= 30){
        alert('Situação: Sobrepeso');
    }else if(imc > 30 && imc <= 35){
        alert('Situação: Obesidade Moderada');
    }else if(imc > 35 && imc <= 40){
        alert('Situação: Obesidade Severa');
    }else if(imc > 40 && imc <= 50){
        alert('Situação: Obesidade Morbida');
    }else{
        alert('Situação: Gordo');
    }
}