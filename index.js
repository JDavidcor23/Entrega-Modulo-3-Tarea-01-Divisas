var moneda = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];

var selector = document.getElementById("selector")

var fragment = document.createDocumentFragment();

moneda.forEach(function(monedas) {
    var option = document.createElement('option');
    option.textContent = monedas;
    fragment.appendChild(option);
});

selector.appendChild(fragment);

var moneda2 = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];

var selector2 = document.getElementById("selector2")

var fragment2 = document.createDocumentFragment();

moneda2.forEach(function(monedas2) {
     var option2 = document.createElement('option');
     option2.textContent = monedas2;
     fragment2.appendChild(option2);
});

selector2.appendChild(fragment2);

var respuesta = document.getElementById('invisible')
var valor = document.getElementById('valor')
const sumar=()=>{
    let numero = document.getElementById('cantidad').value;
    parseInt(numero)
    
    let total;
    if(selector.value === "Peso Colombiano"){
        if(selector2.value === "Dolar"){
            total = numero * 0.00027
        }
        else if(selector2.value === "Peso Mexicano"){
            total = numero * 0.0054
        }
        else if(selector2.value === "Libra Esterlina"){
            total = numero * 0.00019
        }
        else if(selector2.value === "Euro"){
            total = numero * 0.00023
        }
        else if (selector.value === "Peso Colombiano" || selector.value === "Elige tu Moneda"){
            console.log('elige una moneda')
        }
    } 
    else if(selector.value === "Dolar"){
        if(selector2.value === "Peso Colombiano"){
            total = numero * 3772
        }
        else if(selector2.value === "Peso Mexicano"){
            total = numero * 20.34
        }
        else if(selector2.value === "Libra Esterlina"){
            total = numero * 0.73
        }
        else if(selector2.value === "Euro"){
            total = numero * 0.86
        }
        else if (selector.value === "Dolar" || selector.value === "Elige tu Moneda"){
            console.log('Elige la moneda a la que quieres cambiar')
        }
    } 
    else if(selector.value === "Peso Mexicano"){
        if(selector2.value === "Peso Colombiano"){
            total = numero * 185.01
        }
        else if(selector2.value === "Dolar"){
            total = numero * 0.049
        }
        else if(selector2.value === "Libra Esterlina"){
            total = numero * 0.036
        }
        else if(selector2.value === "Euro"){
            total = numero * 0.042
        }
        else if (selector.value === "Peso Mexicano" || selector.value === "Elige tu Moneda"){
            console.log('Elige la moneda a la que quieres cambiar')
        }
    } 
    else if(selector.value === "Euro"){
        if(selector2.value === "Peso Colombiano"){
            total = numero * 4365
        }
        else if(selector2.value === "Dolar"){
            total = numero * 1.16
        }
        else if(selector2.value === "Libra Esterlina"){
            total = numero * 0.84
        }
        else if(selector2.value === "Peso Mexicano"){
            total = numero * 23.59
        }
        else if (selector.value === "Euro" || selector.value === "Elige tu Moneda"){
            console.log('Elige la moneda a la que quieres cambiar')
        }
    } 
    else if(selector.value === "Libra Esterlina"){
        if(selector2.value === "Peso Colombiano"){
            total = numero * 5172
        }
        else if(selector2.value === "Dolar"){
            total = numero * 1.37 
        }
        else if(selector2.value === "Euro"){
            total = numero * 1.19
        }
        else if(selector2.value === "Peso Mexicano"){
            total = numero * 27.96
        }
        else if (selector.value === "Libra Esterlina" || selector.value === "Elige tu Moneda"){
            console.log('Elige la moneda a la que quieres cambiar')
        }
    } 
    if (isNaN(total)) {
        total = 'Debes ingresar un numero'     
    }
    if(selector.value === "Elige tu Moneda"){
        total = 'Elige la moneda a la que quieres cambiar'
    }
    respuesta.setAttribute('id', 'respuesta')
     valor.innerHTML = total
}