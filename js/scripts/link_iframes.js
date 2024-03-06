/**
 * @RunJS styles/link_iframes
 * @RunJS {n:'styles/link_iframes'}
 */
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne tous les éléments avec la classe 'hover_frame'
    var hoverFrames = document.querySelectorAll('.hover_frame');

    hoverFrames.forEach(function(hoverFrame) {
        hoverFrame.addEventListener('mouseover', function() {
            // Vérifie si l'iframe n'a pas déjà été ajouté
            if (!this.querySelector('.description')) {
                // Crée un nouvel élément iframe
                var iframe = document.createElement('iframe');
                iframe.className = 'description';
                iframe.style.display = 'none'; // Commence caché
                iframe.src = this.getAttribute('href');

                // Ajoute l'iframe comme enfant de l'élément courant
                this.appendChild(iframe);
            }
            // Montre l'iframe
            this.querySelector('.description').style.display = 'block';
        });

        hoverFrame.addEventListener('mouseout', function() {
            // Cache l'iframe
            var iframe = this.querySelector('.description');
            if (iframe) {
                iframe.style.display = 'none';
            }
        });
    });
});

