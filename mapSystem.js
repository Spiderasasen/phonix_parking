// Create a real-world map centered on Elon University
const map = L.map('map').setView([36.1025, -79.5069], 16);

// Add OpenStreetMap tiles (free, no key needed)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Elon University bounding box (approx)
const elonBounds = L.latLngBounds(
    [36.0985, -79.5135], // Southwest corner
    [36.1075, -79.4980]  // Northeast corner
);

// Lock the map inside these bounds
map.setMaxBounds(elonBounds);

// Add a little bounce-back when hitting the edge
map.setMinZoom(16);
