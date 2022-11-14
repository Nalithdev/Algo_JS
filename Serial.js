let prenom=["Pierrick" , "NicoC" , "NicoD" , "Alexis" , "Guillaume"]

class Serial{
    constructor(nom , hp) {
        this.nom = nom;
        this.hp = hp;
    }
}
class survivor{
    constructor(nom , pm , pd , pmd){
        this.nom = nom;
        this.pm = pm;
        this.pd = pd;
        this.pmd = pmd;
    }


}
function personne(ns){
    return Math.floor(Math.random() * ns)
}
 function proba() {
    return Math.random()
}
Jason=  new Serial("Jason" , 100)
alcoolo = new survivor(prenom[Math.floor(Math.random() * 5)] , 0.5 , 0.3 , 0.2)
blonde = new survivor(prenom[Math.floor(Math.random() * 5)] , 0.7 , 0.2 , 0.1)
con = new survivor(prenom[Math.floor(Math.random() * 5)] , 0.3 , 0.6 , 0.1 )
gros = new survivor(prenom[Math.floor(Math.random() * 5)] , 0.6 , 0.1 , 0.3)
intello = new survivor(prenom[Math.floor(Math.random() * 5)] , 0.7 , 0.1 , 0.2)
survivant = [ alcoolo , blonde , con , gros , intello]
while(Jason.hp >= 0 && survivant.length > 0)
{
    console.log(survivant)
    let perso = personne(survivant.length);
    let survi = survivant[perso];
    console.log(survi)
    let prob = proba();
    if (prob <= survi.pm){
        console.log(survi.nom + "est mort se soir")
        survivant.splice(perso , 1);
        console.log(survivant)
    }
    else if (prob > survi.pm && prob <= survi.pm + survi.pd )
    {
        Jason.hp -=10;
        console.log(Jason.nom + " à perdu 10 point vie et à tuer personne")

    }
    else{
        Jason.hp -= 15
        console.log(Jason.nom + " à tuer " + survi.nom + " cet nuit et à perdu 15 point de vie")
        survivant.splice(perso , 1);
    }
    console.log(Jason)



}

