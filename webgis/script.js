// ساخت نقشه
var map = L.map('map').setView([35.6892, 51.3890], 8); // تهران

// افزودن لایه نقشه
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// بارگذاری داده‌ی GeoJSON
fetch('data/farm.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup('مزرعه: ' + feature.properties.name);
      },
      style: {
        color: 'green',
        weight: 2
      }
    }).addTo(map);
  });
