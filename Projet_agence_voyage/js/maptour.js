// Initialisation de la carte
const map = L.map('map', {
    center: [12.6490, 54.0200], // Yemen
    zoom: 16,
    dragging: false,             // désactive le drag
    touchZoom: false,            // désactive le zoom tactile
    scrollWheelZoom: false,      // désactive le zoom à la molette
    doubleClickZoom: false,      // désactive le zoom double clic
    boxZoom: false,              // désactive le zoom par sélection
    keyboard: false,             // désactive le contrôle clavier
    zoomControl: false,          // retire les boutons +/-
  }).setView([12.6490, 54.0200], 16);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map);
  
  // Données des points d'intérêt
  const points = [
      { id: 1, name: "Hadibo", coords: [12.6490, 54.0200], type: "lieu", image: "./medias/maprelated/hadibo_socotra.jpg", description: "Centre administratif et logistique de l'île, point de départ principal"},
      { id: 2, name: "Plage de Qalansiyah", coords: [12.6535, 53.4606], type: "lieu", image: "./medias/maprelated/qalansiyah_beach.jpg", description: "Baie turquoise bordée de sable blanc, village de pêcheurs traditionnel." },
      { id: 3, name: "Dunes de sable de Detwah", coords: [12.6667, 53.4483], type: "lieu" , image: "./medias/maprelated/detwah_yemen.webp", description: "Lagune protégée, paysage surnaturel, flore endémique unique." },
      { id: 4, name: "Plateau de Diksam", coords: [12.4750, 54.0075], type: "lieu" , image: "./medias/maprelated/diksam_socotra.webp", description: "Forêt de dragoniers, formations rocheuses abruptes, vue panoramique." },
      { id: 5, name: "Vallée de Firhmin", coords: [12.4708, 54.0264], type: "lieu" , image: "./medias/maprelated/firhmin_socotra.jpg", description: "Concentration de Dracaena cinnabari, habitat endémique" },
      { id: 6, name: "Grotte de Hoq", coords: [12.5650, 54.3333], type: "lieu" , image: "./medias/maprelated/hoqcave_socotra.jpg", description: "Cavité calcaire de plusieurs kilomètres, inscriptions antiques." },
      { id: 7, name: "Piscines naturelles de Ayhaft", coords: [12.6408, 54.0314], type: "lieu" , image: "./medias/maprelated/ayhaft_socotra.webp", description: "Source d’eau douce dans une gorge, biodiversité rare." },
      { id: 8, name: "Plage d’Arher", coords: [12.6119, 54.4453], type: "lieu" , image: "./medias/maprelated/arher_socotra.jpg", description: "Rencontre entre dunes géantes et océan, site d’observation des étoiles." }
  ];
  
  // Légende associée
      const legendContainer = document.getElementById('legend');
      const navItems = document.getElementById('nav-items');
  
  // Gestion bidirectionnelle
      const markers = {};
  
  // Bloc panel
      function showPanel(point) {
      const panel = document.getElementById('info-panel');
      const content = `
        <h2>${point.name}</h2>
        <img src="${point.image || 'placeholder.jpg'}" alt="${point.name}" style="width:100%; max-height:200px; object-fit:cover;">
        <p>${point.description || 'Description non disponible.'}</p>
      `;
      panel.innerHTML = content;
      panel.style.display = 'block';
      }
  
  
  
    // Modifications des marqueurs
  
      const icons = {
      hotel: L.icon({ iconUrl: './medias/maprelated/hotel_marker.svg', iconSize: [50, 70], iconAnchor: [15, 40] }),
      bar: L.icon({ iconUrl: './medias/maprelated/bar_marker.svg', iconSize: [50, 70], iconAnchor: [15, 40] }),
      restaurant: L.icon({ iconUrl: './medias/maprelated/restaurant_marker.svg', iconSize: [50, 70], iconAnchor: [15, 40] }),
      lieu: L.icon({ iconUrl: './medias/maprelated/poi_marker.svg', iconSize: [50, 70], iconAnchor: [15, 40] })
      };
  
      points.forEach((point, index) => {
      // Création du marqueur
  
      const marker = L.marker(point.coords, { icon: icons[point.type] }).addTo(map);
      marker.on('click', () => {
      showLegend(point.id);
      showPanel(point);
      });
      markers[point.id] = marker;
  
      // Création des éléments HTML liés
      const navButton = document.createElement('button');
      navButton.innerText = point.name;
      navButton.dataset.id = point.id;
      navItems.appendChild(navButton);
  
      // const legendItem = document.createElement('div');
      // legendItem.id = `legend-${point.id}`;
      // legendItem.className = 'legend-item';
      // legendItem.innerText = `${point.name} (${point.type})`;
      // legendItem.style.display = 'none';
      // legendContainer.appendChild(legendItem);
  
    // Navigation depuis bouton vers carte
      navButton.addEventListener('click', () => {
      map.flyTo(point.coords, 15, { duration: 1.2 });
      marker.openPopup();
      showLegend(point.id);
      showPanel(point);
      });
      });
  
  // Fonction d'affichage de légende unique
      function showLegend(id) {
      document.querySelectorAll('.legend-item').forEach(el => {
      el.style.display = 'none';
    });
      const item = document.getElementById(`legend-${id}`);
      if (item) item.style.display = 'block';
      }
  
  
      const orderedCoords = points
    .sort((a, b) => a.id - b.id)
    .map(point => point.coords);
  
    const tourButton = document.createElement('button');
    tourButton.innerText = 'Tour';
    tourButton.addEventListener('click', startTour);
    tourButton.classList.add('tour-button');
    navItems.appendChild(tourButton);
  
  L.polyline(orderedCoords, { color: 'black', weight: 3, smoothFactor: 1 }).addTo(map);
  
  function startTour() {
      points.sort((a, b) => a.id - b.id).forEach((point, index) => {
        setTimeout(() => {
          map.flyTo(point.coords, 15, { duration: 1.5 });
          showLegend(point.id);
          showPanel(point);
        }, index * 3000); // 3 secondes entre chaque arrêt
      });
    }
  