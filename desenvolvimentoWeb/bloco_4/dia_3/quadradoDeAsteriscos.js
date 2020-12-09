function quadrado(altura) {
  var x = [];
  var y = [];

  //montando a tabela
  for (let i = 0; i < altura; i += 1) {
    x.push(`*`);
    y.push(x);
  }
  console.log(y);
}

quadrado(5);

//let array = [[1 ,0], 2, 3, 4];
//console.log(array[0][1]);