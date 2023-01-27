let v = 20 ;
let x = 0;
let y = 1
w= false
document.write("<h2>Joueur "+ y +" à toi</h2>")
document.write("<div class='planche'>")

for(i = 0 ; i <20 ; i++){
    document.write('<div onclick="del()" class="baton"> I </div>')
}
document.write("</div>")
function del(){

  console.log(x)
  console.log(w)
    if ( x >= 3 || w === true){
      
        x= 0
        if (y === 1 ) {
            y = 2;
        }
        else{
            y= 1
        }
        w= false
        v = v - 1
        boucle(v)
        
    }
    else{
      x+=1;
    v-= 1;
    console.log(x)
    boucle(v)

    }
  }
  
    


function boucle(){
  
  document.body.innerHTML = '';
  document.write("<h2>Joueur "+ y +" à toi</h2>")
  document.write('<link rel="stylesheet" href="style.css">');
  document.write("<div class='planche'>")
  for(i = 0 ; i < v ; i++){
    document.write('<div onclick="del()" class="baton"> I </div>')
}
document.write("</div>")
document.write('<button onclick="fin_tour()">Fin du tour</button>')
document.write('  <script src="jeu_nimes.js"></script>'); 
if(v <= 0){
  document.write('<p> Le Joueur '+ y  +' à perdu</p>')
}
}

function fin_tour(){
  if(x >= 1){
    console.log(true);
    w =true;
    return del();

  }
  else{
    return w = false;
  }
}



