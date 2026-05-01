// Create a real-world map centered on Elon University
const map = L.map('map').setView([36.1025, -79.5069], 16);

// Add OpenStreetMap tiles (free, no key needed)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Elon University bounding box (approx)
const elonBounds = L.latLngBounds(
    [36.111493445024784, -79.51447248458864], // Southwest corner
    [36.09532846648086, -79.48168516159059]  // Northeast corner
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

const admissionsLot = L.polygon([
    [36.10548356259765, -79.50264072470391],
    [36.1057135026161, -79.50264370327457],
    [36.10569183330637, -79.50359869522744],
    [36.10549246727527, -79.50359933328195]
], {
    color: "#ff0000",
    fillColor: "#ff0000",
    fillOpacity: 0.4
}).addTo(map);

admissionsLot.bindPopup("<b>Risk Lot</b><br>All passes are at risk!");

const historicLot = L.polygon([
    [36.10189510795925, -79.4992705194826],
    [36.1019059431385, -79.49854655108406],
    [36.10104129113651, -79.49852510016854],
    [36.101028288778146, -79.49926515675374]
], {
    color: "#22ff00",
    fillColor: "#22ff00",
    fillOpacity: 0.4
}).addTo(map);

historicLot.bindPopup("<b>Universal Lot</b><br>All Passes are permitted");

const linderLot1 = L.polygon([
    [36.10105643526185,  -79.50147525897609],
    [36.10106943761557, -79.50107305431021],
    [36.10089173859531, -79.50105696612358],
    [36.10088957153163, -79.5014618521539]
], {
    color: "#FFD700",       // border color
    fillColor: "#FFD700",   // fill color
    fillOpacity: 0.4
}).addTo(map);

// Label the lot
linderLot1.bindPopup("<b>FS Lot</b><br>Faculty/Staff Parking");

const linderLot2 = L.polygon([
    [36.10100875534834,  -79.50216426913242],
    [36.10101742358965, -79.50179155947538],
    [36.10085922803529, -79.5017861967465],
    [36.100852726841325, -79.50216158776799]
], {
    color: "#FFD700",       // border color
    fillColor: "#FFD700",   // fill color
    fillOpacity: 0.4
}).addTo(map);

// Label the lot
linderLot2.bindPopup("<b>FS Lot</b><br>Faculty/Staff Parking");

const moonyLot = L.polygon([
    [36.10100874505716,  -79.50388639005328],
    [36.10103258271843, -79.50289696657525],
    [36.100887389578475, -79.50288892248194],
    [36.100857050679494, -79.5038676205022]
], {
    color: "#FFD700",       // border color
    fillColor: "#FFD700",   // fill color
    fillOpacity: 0.4
}).addTo(map);

// Label the lot
moonyLot.bindPopup("<b>FS Lot</b><br>Faculty/Staff Parking");

const factulyLine = L.polygon([
    [36.10066633978317, -79.50614192767037],
    [36.10074002143866, -79.50251321052166],
    [36.10067935019355, -79.50251316238086],
    [36.10061216630169, -79.50613927755522]
], {
    color: "#FFD700",       // border color
    fillColor: "#FFD700",   // fill color
    fillOpacity: 0.4
}).addTo(map);

// Label the lot
factulyLine.bindPopup("<b>FS Lot</b><br>Faculty/Staff Parking");

map.on('click', e => console.log(e.latlng));

