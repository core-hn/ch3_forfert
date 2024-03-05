```js
RunJS = "TEST / lk_iframes"

$(".hover_frame").mouseover(function() {

// Vérifie si l'iframe n'a pas déjà été ajouté

if ($(this).children(".description").length === 0) {

// Récupère l'attribut href pour l'utiliser comme source de l'iframe

var lien = $(this).attr('href');

// Crée un élément iframe

var iframe = $('<iframe>', {

class: 'description',

src: lien,

css: {

display: 'none' // Commence caché, peut être montré selon le besoin

}

});

// Ajoute l'iframe comme enfant de l'élément courant

$(this).append(iframe);

}

// Montre l'iframe

$(this).children(".description").show();

}).mouseout(function() {

// Cache l'iframe

$(this).children(".description").hide();

});
```