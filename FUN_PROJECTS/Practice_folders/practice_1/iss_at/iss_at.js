

const myMap = L.map('mapid').setView([20, 20], 2);
const attribution =
	'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(myMap);

const myIcon = L.icon({
	iconUrl: 'iss.png',
	iconSize: [50, 32],
	iconAnchor: [25, 16],

});

let marker = L.marker([0, 0], { icon: myIcon }).addTo(myMap);

let intial_launch = true

const iss_api_url = 'https://api.wheretheiss.at/v1/satellites/25544'

async function getData() {

	const response = await fetch(iss_api_url)
	const location = await response.json()

	if (intial_launch) {
		myMap.setView([location["latitude"], location["longitude"]], 5)
		intial_launch = false
	}
	marker.setLatLng([location["latitude"], location["longitude"]], myMap.getZoom())


	document.getElementById('lat').textContent = location["latitude"].toFixed(2)
	document.getElementById('long').textContent = location["longitude"].toFixed(2)

	//L.marker([location["latitude"], location["longitude"]]).addTo(mymap);
	console.log(`Iss is at : ${location}`)
	console.log(`Latitude: ${location['latitude'].toFixed(2)}`)
	console.log(`Longitude: ${location['longitude'].toFixed(2)}`)
}
getData();
setInterval(getData, 1000);