/* Crear una función expresada que al recibir un numero como 
parametro imprima por consola “El número es par” si lo es, o 
“El número es impar” si no lo es. En el caso que el numero fuese 0 
mostrar un mensaje de error. Se debe incluir un if ternario en script.*/

let nro =0;
function parImpar (n){
    if(n!=0){
        return n%2===0 ? 'El número es par' : 'El número es impar';
    }else{
        return 'Error';
    }
}
console.log(parImpar(nro));