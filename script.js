const apiKey = "/*clé fournie lors de la création d'un compte openweathermap.org*/";

//fonction asynchrone avec callback pour récupérer les données du JSON recu comme réponse de la requête

async function recupDonees(city, callback) {
    try {
        const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        return callback(data);
    } catch {
        console.log("error");
    }
}

//fonction callback pour afficher la température

function affTemp(dt) {
    console.log(dt.main.temp + " °C");
}

//appel de la fonction asynchrone

recupDonees('Paris', affTemp);
