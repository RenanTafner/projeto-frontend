function determinarLocalizacao() { 
    if ('geolocation' in navigator) {

        navigator.geolocation.getCurrentPosition(successCallback,errorCallback);

    }else{
        document.getElementById('endereco').innerHTML = 'Erro: Os recursos de geolocalização não são suportados pelo navegador';
    }



} 

function successCallback (position) {

        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        var coordenadas = latitude +',' + longitude;

       // var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+coordenadas+"&amp;zoom=14&amp;size=400x300&amp;key=AIzaSyAa8HeLH2lQMbPeOiMlM9D1VxZ7pbGQq8o";
       var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+coordenadas+"&zoom=13&size=600x300&markers=color:red%7Clabel:L%7C"+coordenadas+"&key=AIzaSyAa8HeLH2lQMbPeOiMlM9D1VxZ7pbGQq8o";

       document.getElementById('endereco').innerHTML = "<img src='"+img_url+"' width='1000' height='600'>";

}

function errorCallback (error) {
    document.getElementById('endereco').innerHTML = 'Erro: Os recursos de geolocalização não foram permitidos pelo navegador';
}


determinarLocalizacao();