document.addEventListener("DOMContentLoaded", function () {
  // Cette ligne ajoute un écouteur d'événement à la page web, qui sera activé une fois que le DOM aura été complètement chargé.
  const colorBox = document.getElementById("color-box");
  // Cette ligne sélectionne l'élément HTML avec l'id 'color-box' et l'enregistre dans la variable 'colorBox'.
  const changeColorBtn = document.getElementById("change-color-btn");
  // Cette ligne sélectionne l'élément HTML avec l'id 'change-color-btn' et l'enregistre dans la variable 'changeColorBtn'.

  function getRandomColor() {
    // Cette fonction est utilisée pour générer une couleur aléatoire sous forme de chaîne de caractères hexadécimaux.
    const letters = "0123456789ABCDEF";
    // Cette ligne définit un tableau de chaînes de caractères utilisées pour générer la couleur aléatoire.
    let color = "#";
    // Cette ligne initialise la chaîne de caractères de couleur avec le caractère '#'.
    for (let i = 0; i < 6; i++) {
      // Cette boucle for itère 6 fois pour générer les 6 caractères de la chaîne de caractères de couleur.
      color += letters[Math.floor(Math.random() * 16)];
      // Cette ligne sélectionne un caractère aléatoire du tableau 'letters' et l'ajoute à la chaîne de caractères de couleur.
      //   La raison pour laquelle nous multiplions par 16 est due à la nature hexadécimale des codes couleur.
      //   En hexadécimal, nous avons 16 chiffres possibles, de 0 à F (représentant les valeurs décimales de 0 à 15).
      //   Par conséquent, en multipliant par 16, nous choisissons un chiffre hexadécimal aléatoire parmi les 16 possibilités.
      //    Cela garantit que nous obtenons un caractère valide dans le système hexadécimal pour représenter une composante de couleur
      //    (rouge, vert ou bleu) dans notre code couleur final.
    }
    console.log(color);
    return color;
    // Cette ligne renvoie la chaîne de caractères de couleur aléatoire.
  }

  changeColorBtn.addEventListener("click", function () {
    // Cette ligne ajoute un écouteur d'événement au bouton 'change-color-btn' pour gérer le clic sur le bouton.
    colorBox.style.backgroundColor = getRandomColor();
    // Cette ligne appelle la fonction 'getRandomColor()' pour générer une couleur aléatoire et la définir comme la couleur de fond de l'élément 'colorBox'.
  });
});
