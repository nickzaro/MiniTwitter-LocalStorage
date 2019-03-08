const listaTweets = document.getElementById('lista-tweets');

function eventListeners() {
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //borrar tweets
    listaTweets.addEventListener('click', borrarTweet);
}
eventListeners();

function agregarTweet(e) {
    e.preventDefault();

    // leyendo el texto del textArea
    const tweet = document.getElementById('txtTweet').value;

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


    //agregar a LocalStorage
    agregarTweetALocalStorage(tweet);
}

function borrarTweet(e) {
    e.preventDefault();
    if (e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
    }
}

function agregarTweetALocalStorage(tweet) {
    let tweets;
    
    // agrego al local storage
    tweets= obtenerTweetLocalStorage();
    tweets.push(tweet);
    localStorage.setItem('tweets',JSON.stringify(tweets));
}

function obtenerTweetLocalStorage() {
    let tweets ;
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        console.log(localStorage.getItem('tweets'));
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}
