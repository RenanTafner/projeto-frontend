function determinarLocalizacao() { 

    if (`geolocation` in navigator) {

       let nome = document.getElementById(`nome`).value;

        if(nome===``){
            document.getElementById(`mensagem_nome_faltando`).innerHTML = `Erro: Favor digitar seu nome`;
            return;
        }

        document.getElementById(`mensagem_nome_faltando`).innerHTML = ``;

        let functions = [successCallback,errorCallback];

        navigator.geolocation.getCurrentPosition(...functions);

    }else{
        document.getElementById(`endereco`).innerHTML = `Erro: Os recursos de geolocalização não são suportados pelo navegador`;
    }

} 

function successCallback (position) {

        let coordenadasObject = {latitude: position.coords.latitude, longitude:position.coords.longitude};
        let {latitude,longitude} = coordenadasObject;

        const coordenadas = `${latitude},${longitude}`;
    
       let img_url = `https://maps.googleapis.com/maps/api/staticmap?center=${coordenadas}&zoom=13&size=600x300&markers=color:red%7Clabel:L%7C"${coordenadas}"&key=AIzaSyAa8HeLH2lQMbPeOiMlM9D1VxZ7pbGQq8o`;

       let nome = document.getElementById(`nome`).value;

       document.getElementById(`endereco`).innerHTML = `<p>Bem vindo ${nome} , Resultado da consulta:</p>
       <figure>
       <img class = 'body__main__section__image--result' src='${img_url}' width='1000' height='600' alt='Imagem com um mapa marcando suas coordenadas'>
       <figCaption>
       Mapa com a sua localização.
       </figCaption
       </figure>`;

}

function errorCallback (error) {
    document.getElementById(`endereco`).innerHTML = `Erro: Os recursos de geolocalização não foram permitidos pelo navegador`;
}
