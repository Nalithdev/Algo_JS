/*
let a = 4;
let b = 4;
var c = 3;

if (a === b){
console.log("C'est égal")
}
else{
console.log("c'est pas égal")
}

if(c < b && c+a != 3){
console.log("OK")
}

else{
  console.log("raté")
}

switch (a){
  case b:
  console.log("égale à b");
  break;
  case c:
  console.log("égale à c");
  break;
  default:
    console.log("égal à rien");
}

for( a ; a<1000000000; a++){
  console.log(a);
}

while(a > -10){
console.log(a)
a++
}
for( a ; a<1000000000; a++){
console.log(a);
}

for( a ; a<1000000000; a++){
console.log(a);
}

while(a > -10){
console.log(a)
a++
}
while(a > -10){
console.log(a)
a++
}

while(a < 9){
a++

if(a === 8){

  console.log("sorti")
  break;
}
if(a === 7){
  console.log("recommence")
  continue;

}
console.log(a)

}
console.log("j'ai cassé la boucle au bout de " + a + " tours")

function puissance (n1 , n2){
  console.log(n1 ** n2)
}
function addition (n1 , n2){
  console.log(n1 + n2)
}
function multiplication (n1 , n2){
  console.log(n1 * n2)
}
puissance(a , b)
addition(a , b)
multiplication(a , b)

function identique (n1 , n2 , result){
  if(n1 === n2){
    result = "True"
    console.log(result);

  }
  else{
    result ="False"
    console.log(result)

  }


}
identique("Jean" , "Pierre" , "")


n1 = "Pierre"
n2 = "Jean"
result = identique1(n1 , n2)
function identique1 (n1 , n2){
  if(n1 === n2){
    return "True"


  }
  else{
    return"False"


  }
}

console.log(result);

let array = ["NicoDG","PierrC"]
console.log(array)
array.push("AlexB")
array.splice(1,1 , "NicoC")
console.log(array)
console.log(array.length)

let fruits = ['pomme', 'poire', 'banane']
fruits.forEach(function(fruit){
  console.log((fruit))
})
fruits.forEach((fruit)=>{
  console.log((fruit))
})


let names =[]
names.push('Vincent', 'Paul', 'Arthur')


names.splice(0, 2 , "Vincent va à la pêche")
names.splice(1, 2 , "Paul va à la pêche")
names.splice(2, 2 , "Arthur va à la pêche")
console.log(names)
for(i=0 ; i < names.length ; i++){
  names[i] += ", attrape un poisson"
}
console.log(names)
names.forEach((name)=>{
  name += " et rentre chez lui"
  console.log(name)
})

class Guerrier {
  constructor(attack , defense) {
    this.attack = attack;
    this.defense = defense;
  }
  getAttack(){
      console.log(this.attack);
         }
  getDefense(){
    console.log((this.defense))
  }
}


class Pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }

  isLucky() {
    let lucky =Math.random()
    console.log(lucky)
    if (this.luck > lucky){
      return true
    }
    else{
      return false
    }
  }

  attackPokemon(p) {
    if(this.isLucky()) {
      let degatp1 = this.attack - p.defense;
      p.hp-= degatp1;
      console.log(p.name + ' à subit ' + degatp1)
    }
  }
}
let pikachu = new Pokemon( "Pikachu" , 30 , 15 , 1150 , 0.50)
let bulbi = new Pokemon("bulbizarre", 20 , 20 , 2300 , 0.50)


  while (pikachu.hp > 0 && bulbi.hp > 0) {
    pikachu.attackPokemon(bulbi)
    console.log(bulbi)
    if (bulbi.hp <= 0) {
      console.log(bulbi.name + ' est mort')
      break
    }
    bulbi.attackPokemon(pikachu)
    console.log(pikachu)
    if (pikachu.hp <= 0) {
      console.log(pikachu.name + ' est mort')
      break

    }
  }

*/
class humain{
  constructor(nom , hp) {
    this.nom = nom;
    this.hp = hp;
  }
  Chanson(){
    return Math.floor(Math.random() * 4)
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
  console.log(luck)
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


