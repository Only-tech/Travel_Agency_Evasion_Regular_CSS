// Sélectionner tous les boutons de menu
const menuButtons = document.querySelectorAll('.menuButton');

// Fonction pour fermer tous les menus
function closeAllMenus() {
  const menus = document.querySelectorAll('.menu');
  menus.forEach(menu => {
    menu.classList.add('hidden');
  });
}

// Ajouter les événements 'mouseover' et 'mouseleave'
menuButtons.forEach(button => {
  const targetMenuId = button.getAttribute('data-target');
  const targetMenu = document.getElementById(targetMenuId);

  if (!targetMenu) {
    console.error(`Le menu avec l'ID ${targetMenuId} n'a pas été trouvé.`);
    return;
  }

  // Quand la souris passe sur le bouton
  button.addEventListener('mouseover', function () {
    closeAllMenus();
    targetMenu.classList.remove('hidden');
  });

  // Quand la souris quitte le bouton
  button.addEventListener('mouseleave', function (e) {
    // Si la souris ne va PAS vers le menu lui-même
    if (!targetMenu.contains(e.relatedTarget)) {
      targetMenu.classList.add('hidden');
    }
  });

  // Quand la souris quitte le menu
  targetMenu.addEventListener('mouseleave', function (e) {
    // Si la souris ne retourne PAS vers le bouton
    if (!button.contains(e.relatedTarget)) {
      targetMenu.classList.add('hidden');
    }
  });
});
