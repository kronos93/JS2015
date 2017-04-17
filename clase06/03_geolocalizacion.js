(function(w, d) {
    let miUbicacion = navigator.geolocation;
    miUbicacion.getCurrentPosition(function(p) {
        console.log(p.coords.latitude);
        console.log(p.coords.longitude);
    });
})(window, document);