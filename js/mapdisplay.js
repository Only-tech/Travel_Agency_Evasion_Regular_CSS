// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// Yemen 
document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([12.53094, 53.91000], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
    }).addTo(map);
  });

  // Sibérie
  document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map2').setView([62.02671, 129.73225], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
    }).addTo(map);
  });

  // Ethiopie
  document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map3').setView([14.25465 ,40.29588], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
    }).addTo(map);
  });

  document.querySelector('.flip-card').addEventListener('mouseenter', () => {
    setTimeout(() => {
      map.invalidateSize();
    }, 400); // attendre le flip
  });