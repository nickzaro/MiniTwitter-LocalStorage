const listaTweets = document.getElementById('lista-tweets');

function eventListeners() {
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
}
eventListeners();

function agregarTweet(e) {
    e.preventDefault();

    // leyendo el texto del textArea
    const tweet = document.getElementById('txtTweet').value;

    //crear un elemento para escribir el texto leido
    const elementTweet = document.createElement('li');
    elementTweet.innerText = tweet;
    listaTweets.appendChild(elementTweet);

    //console.log(elementTweet);
}