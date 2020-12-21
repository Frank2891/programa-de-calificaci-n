let nombre = prompt('introduce nombre');
/*let edad = parseFloat( prompt('introduce edad '));*/
let cal = parseFloat( prompt('introduce nota'));

if( (cal =>60) && (cal < 71)){

    console.log(`hola ${nombre} tu calificacion es D`);


}else if ( (cal >71) &&  (cal <80)){
    console.log(`hola ${nombre} tu calificacion es C`);
}else if ( (cal >81) &&  (cal <90)){
    console.log(`hola ${nombre} tu calificacion es B`);
}else if (cal > 90){

   console.log(`hola ${nombre} tu calificacion es A`);
}