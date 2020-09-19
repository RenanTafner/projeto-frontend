function determinarLocalizacao() { 

    if ('geolocation' in navigator) {

       let nome = document.getElementById('nome').value;

        if(nome===""){
            alert("Favor digitar o seu nome.")
            return;
        }



        navigator.geolocation.getCurrentPosition(successCallback,errorCallback);

    }else{
        document.getElementById('endereco').innerHTML = 'Erro: Os recursos de geolocalização não são suportados pelo navegador';
    }

} 

function successCallback (position) {

        let coordenadasObject = {latitude: position.coords.latitude, longitude:position.coords.longitude};
        let {latitude,longitude} = coordenadasObject;

        const coordenadas = latitude +',' + longitude;
    
       let img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+coordenadas+"&zoom=13&size=600x300&markers=color:red%7Clabel:L%7C"+coordenadas+"&key=AIzaSyAa8HeLH2lQMbPeOiMlM9D1VxZ7pbGQq8o";

       let nome = document.getElementById('nome').value;

       document.getElementById('endereco').innerHTML = "<p>Bem vindo " + nome +" , Resultado da consulta:</p><img class = 'body__main__section__image--result' src='"+img_url+"' width='1000' height='600'>";

}

function errorCallback (error) {
    document.getElementById('endereco').innerHTML = 'Erro: Os recursos de geolocalização não foram permitidos pelo navegador';
}
