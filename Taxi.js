/*
class humain{
  constructor(nom , hp) {
    this.nom = nom;
    this.hp = hp;
  }
  Chanson(){
    return Math.floor(Math.random() * 5)
  }
}

let Nico = new humain("Nicolas", 10)
let musique= [
    "Wejdene : Anissa",
    "Nano",
    "Onlap",
    "Soldier Citizen",
    "Skillet"
];
let taxi =0;
for(i = 0 ; i < 30; i++){
  let luck = Nico.Chanson();
  console.log(i)
  console.log(luck)
  console.log(musique[luck])
  if(musique[luck] === "Wejdene : Anissa"){
    Nico.hp -= 1;
    taxi +=1;
    console.log(Nico)
  }
  if(Nico.hp <= 0){
    console.log('explosion')
    break

  }
  if(i === 29){
    console.log("Il a fallu à "+ Nico.nom + " " +taxi + " changement de taxi pour rentrer chez lui")
  }
}
*/

//La version Hard voir impossible (si pas de luck)
class humain{
  constructor(nom , hp) {
    this.nom = nom;
    this.hp = hp;
  }
  Chanson(){
    return Math.floor(Math.random() * 5)
  }
}

let Nico = new humain("Nicolas", 18)
let musique= [
  "Wejdene",
  "Anissa",
  "Onlap",
  "Soldier Citizen",
  "Skillet"
];
let taxi =0;
for(i = 0 ; i < 30; i++){
  let luck = Nico.Chanson();
  console.log(i)
  console.log(musique[luck])
  if(musique[luck] === "Wejdene" ||musique[luck] === "Anissa"){
    Nico.hp -= 1;
    taxi +=1;
    console.log(Nico)
  }
  if(Nico.hp <= 0){
    console.log('explosion')
    break

  }
  if(i === 29){
    console.log("Il a fallu à "+ Nico.nom + " " +taxi + " changement de taxi pour rentrer chez lui")
  }
}

