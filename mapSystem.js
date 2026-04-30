// Create a real-world map centered on Elon University
const map = L.map('map').setView([36.1025, -79.5069], 16);

// Add OpenStreetMap tiles (free, no key needed)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Example marker for McMichael
L.marker([36.1033, -79.5057])
    .addTo(map)
    .bindPopup("<b>McMichael East</b><br>Ticket trends, info, etc.");