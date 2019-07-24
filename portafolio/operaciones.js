function suma() {
    var n1 = parseInt(prompt("Ingrese un numero 1"));
    var n2 = parseInt(prompt("Ingrese un numero 2"));
    var s = n1 + n2; 
    document.write("La suma es: "+ s);
}
function factorial(){
    var n= parseInt(prompt("Ingresa un numero"));
    var f=1;
    for(var i=1;i<=n;i++){
        f *=1;
    }
    document.write("El factorial es: "+f);
}
function fechaActual(){
    var fecha=new Date ();
    document.write("Hoy es: "+fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()); 

}

function mostrar(){
    alert("LA VARIABLE ES: 0");
    
}

function mostrar1(){
     var nom=document.getElementById("nombre").value;
     var ed=document.getElementById("edad").value;
     alert("Ingreseo el nombre: "+nom);
     alert("Y la edad: "+ed);
}

function menu(){
    document.write("1.-Suma <br> 2.- Factorial <br> 3.-Fecha");
    
}

function casos(){
    var op=parseInt(document.getElementById("txtOp").value);
    alert("Selecciono la opcion: "+op);
    switch(op){
        case 1:
            suma();
            break;
            case 2:
                factorial();
                break;
                case 3:
                    fechaActual();
                    break;
    }
}

function cargarSueldos(array){
    for(var i=0;i<array.length;i++){
        array[i]=parseInt(prompt("Ingrese sueldo"));
    }
}

function calcularGastos(pagos){
    var acu=0;
    for(var i=0;i<pagos.length;i++){
        acu+=pagos[i];
    }
    return acu;
}

function generarNumeros(){
    var dim=parseInt(prompt("Ingrese la dimension"));
    var listaNum=new Array(dim);
    for(var i=0;i<listaNum.length;i++){
       listaNum[i]= Math.random();
    }
    document.write(listaNum.toString()); 
}