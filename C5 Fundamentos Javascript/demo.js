/// Java doesnt compile (C and Java do)
//JAva is a interpreted language (like Python)
//data coercion is VERY strong in JS
var variable="string"; // No se designa el tipo de variable; las comillas sirven para strings.
var number=23.4; // los números se guardan como tales, no se usan comas.
var boolean=true;//booleans 
var ex=null;//valor no existente.
var ex2=undefined;//valor no definido
/// Operadores
var a00=2;// variable names cannot be numbers only.
var a01=5;
var a02=3.2;

console.log("hello world");// cout?
console.log("fu"+"ck");//concatenación
console.log(2*3+4+6*0.1+1);// JS cumple con PEMDAS
console.log(typeof a01);// el cout es el tipo
console.log(5+"5");//5(umber) turns in to a string.

//statements: a comparison that returns a bool
console.log(a00==a01)// returns a bool (false)
console.log(a01=="5")// returns a bool (true; this is bc of the extreme JS coercion)
console.log(a01==="5")// returns a bool breaks coercion (false; this is bc "5" is a str)
// it is the same for: "<",">","<=,">=","!=", etc).
///console.log(!a00=2); DIDNT CATH THIS ONE UP
///-----------------------------------------------------
///-----------------------------------------------------
///                                         FUNCTIOS

///
/// JS has hoisting (?)