YUI.add('za-maps', function (Y) {

    var isRetina = Y.config.win.devicePixelRatio >= 2;
    L.mapbox.accessToken = "pk.eyJ1IjoiYWhtZWRqYWZyaSIsImEiOiJjamM4aTB5dGgwczB3MnFtem1scnc4d3JiIn0.bTpkmkSax83o-qldVxVleA"
    
    Y.all('.map, .event-map').each(function (mapNode) {
        var lat = parseFloat(mapNode.getAttribute("lat"))
        var long = parseFloat(mapNode.getAttribute("long"))
        var zoom = parseFloat(mapNode.getAttribute("zoom"))
        
        // https://www.mapbox.com/mapbox.js/api/v3.1.1/l-map-class/
        var map = L.mapbox.map(mapNode.getDOMNode(), 'mapbox.streets',{
            dragging: false,
            touchZoom: false,
            scrollWheelZoom: false,
            doubleClickZoom: false,
            boxZoom: false,
            zoomControl: false,
            attributionControl: false
        })
        .setView([lat, long], zoom);

        L.marker([lat, long]).addTo(map);

        if (isRetina) {
            map.tileSize = {x: 128, y: 128};
        }
    });

}, '1.8.0', {
    requires: ['node-base', 'mapbox']
});
