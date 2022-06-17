

console.log('Se nota que todavia me extrañas')



setInterval(cambiarSaludo, 2000);

function cambiarSaludo() {

  let frase = document.getElementsByTagName("h3")[0];
console.log(frase);

  if (frase.innerText == "Ganando como siempre") {

    (frase.innerText = "Impongo moda para las niñas!");
  } 
  else {
 
    (frase.innerText = "Ganando como siempre");
  }
  //console.log("frase :" + frase);
}

console.log(cambiarSaludo())