/*
je veux que quand j'écris quelque choses dans la boite input et que je click sur + il ajoute un Li dans tache a faire.

ensuite je veux que quand je click sur une tache il disparait des tache a faire et aparais dans les taches complétées.

ensuite je veux que quand je click sur le bouton de poubelle tout les taches complétées disparaise.
*/

//étape1 aller chercher la valeur dans notre input.

// étape 2 faire aparaitre un li dans le premier ul et y ajouter la valeur du input.

//étape 3 etre mélanger dans tous le code spagetthi

//étape 4  envoyer ton li dans le ul du bas 

//étape 5  quand tu clic sa poubellete les taches complétées son overwrite par un espace

//étape 6 essayer de pas overwrite tout mes li par le meme li 
//const
const inputvaleur = document.getElementById('saisie-tache');
const btnplus = document.getElementById('plusbtn');
const newli = document.querySelector('.liste');// va chercher le premier ul avec la class liste
const TacheAFaire = document.querySelector('.liste-afaire');
const tacheComplet = document.querySelector('.liste-fait');
const iconeTrash = document.querySelector('.icone-trash');


//let li = document.createElement("li");  // ne pas créer son li ici sinon il va overwrite tout les li par le meme li
let ulfirst = document.querySelector('.liste');
let valeurtext;


// function
function getValue(){
    valeurtext = document.getElementById("saisie-tache").value;
   let li = document.createElement("li");  // créer son li ici pour en avoir un nouveau a chaque fois
    if(!valeurtext){
        
        li = document.createElement("li");
        li.textContent = valeurtext;
    }

    if (!ulfirst) {
    console.error("yo ya un erreur ");} 
else {
    li.textContent = valeurtext;
    ulfirst.append(li);
    }
}



function emptytrash(){
      tacheComplet.innerHTML = ''}


// action


//ici je vais chercher le bouton + et je lui demande d'aller chercher la valeur dans le input et ensuite créer un li pour y ajouter la valeur.
btnplus.addEventListener("click", getValue);
//meme affaire sauf je pese sur enter

inputvaleur.addEventListener('keydown', function(e){
   if (e.key === 'Enter') getValue()});



TacheAFaire.addEventListener('click', function(e){
    const elementLi = e.target.closest('li');
    if(elementLi){
        tacheComplet.appendChild(elementLi);
    }
});


iconeTrash.addEventListener('click', emptytrash)



