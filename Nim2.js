var baton = 20;
var  x = 0;
var w = false;
let planche = document.querySelector(".planche");
document.write("<div class='planche'>");
for (let i = 0; i < baton; i++) {
  document.write("<div class='baton' onclick='del()'></div>");
}
document.write("</div>");


document.write("<button onclick='fin_tour()'>Fin du tour</button>");


function del() {
  x += 1;
  if(x <= 3){
    if (w === true) {
      x=0;
      w = false
  
    }
    else if (w === false){
    baton -= 1;
    document.body.innerHTML = '';
    document.write('<link rel="stylesheet" href="style.css">');
    document.write("<div class='planche'>");
for (let i = 0; i < baton; i++) {
  document.write("<div class='baton' onclick='del()'></div>");
}
document.write("</div>");
document.write('<button onclick="fin_tour()">Fin du tour</button>')
document.write('<script src="Nim2.js"></script>');
}
  }
  if (w === true) {
    x=0;
    w = false

  }
  else if (x > 3){
      document.write("Appuie sur le bouton fin de tour")

  }
}

function fin_tour() {
  if (x >= 1) {
    console.log(true);
    w = true
    del()
  }
  else {
    console.log(false);
    w= false
  }
}