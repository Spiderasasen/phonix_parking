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

// Example polygon for McMichael Lot (approx coordinates)
const mcmichaelLot = L.polygon([
    [36.103908346956736,  -79.50096014397515],
    [36.10394301863656, -79.50041051872907],
    [36.10330374262881, -79.50037296003109],
    [36.103318931970165, -79.50092019506485]
], {
    color: "#FFD700",       // border color
    fillColor: "#FFD700",   // fill color
    fillOpacity: 0.4
}).addTo(map);

// Label the lot
mcmichaelLot.bindPopup("<b>FS Lot</b><br>Faculty/Staff Parking");

const nadesLot = L.polygon([
    [36.10762732664536, -79.49874094427692],
    [36.10766199668379, -79.49775376158406],
    [36.104316267462984, -79.49764645911746],
    [36.104316267462984, -79.49846195786371]
], {
    color: "#22ff00",
    fillColor: "#22ff00",
    fillOpacity: 0.4
}).addTo(map);

nadesLot.bindPopup("<b>Universal Lot</b><br>All Passes are permitted");

map.on('click', e => console.log(e.latlng));

