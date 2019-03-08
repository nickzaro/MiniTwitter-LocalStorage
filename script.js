const listaTweets = document.getElementById('lista-tweets');

function eventListeners() {
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //borrar tweets
    listaTweets.addEventListener('click', borrarTweet);

    //Cargar tweets al recargar la pagina
    document.addEventListener('DOMContentLoaded', localStorageListo);
}
eventListeners();

function agregarTweet(e) {
    e.preventDefault();

    // leyendo el texto del textArea
    const tweet = document.getElementById('txtTweet').value;
    agregarElTweetALista(tweet);

    //agregar a LocalStorage
    agregarTweetALocalStorage(tweet);
}

//  imprimiendo el tweet en la lista
function agregarElTweetALista(tweet) {
    //creando un elemento para escribir el texto leido
    const itemTweet = document.createElement('div');
    const elementTweet = document.createElement('li');
    elementTweet.innerText = tweet;
    //añadiendo el elemento al div por mensaje
    itemTweet.appendChild(elementTweet);


    // creando un boton de borrar un elemento de la lista
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    // añadiendo el boton para borrar al div por mensaje
    itemTweet.appendChild(botonBorrar);
    //añadiendo el div mensaje a la lista de mensajes
    listaTweets.appendChild(itemTweet);

}

// borra el tweet seleccionado
function borrarTweet(e) {
    let tweet;
    e.preventDefault();
    if (e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        tweet = e.target.parentElement.getElementsByTagName('li')[0].innerText;
        console.log(tweet);
        borrarTweetDelLocalStorage(tweet);
    }

}

// Recarga los tweet del LocalStorage cuando se recarga la pagina
function localStorageListo() {
    let tweets;
    tweets = obtenerTweetLocalStorage();
    tweets.forEach(tweet => {
        agregarElTweetALista(tweet);
    });

}

//agrega un tweet a la lista y luego al local storage
function agregarTweetALocalStorage(tweet) {
    let tweets;

    // agrego al local storage
    tweets = obtenerTweetLocalStorage();
    tweets.push(tweet);
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// los tweet almacenados en el local storage como arreglo
function obtenerTweetLocalStorage() {
    let tweets;
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        console.log(localStorage.getItem('tweets'));
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

//borrando el elemento de la lista y almacenando lista actualizada
function borrarTweetDelLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetLocalStorage();
    tweets.forEach((element, index) => {
        if (tweet === element) {
            tweets.splice(index, 1);
        }
    });
    // Modificando el localStorage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}