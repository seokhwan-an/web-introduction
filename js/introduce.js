const button = document.getElementById("button");
const cancel = document.getElementById("cancel");
button.addEventListener('click' ,alertMessage);
cancel.addEventListener('click', cancelAll());

function alertMessage() {
    const name = document.querySelector('input[type="text"]').value;

    const movies = document.querySelectorAll('input[name="movie"]:checked');
    
    const numberOfMovies = movies.length

    alert(`${name}님, 저와 ${numberOfMovies}개의 취향이 같으시네요!`)
}

function cancelAll() {
    document.querySelector('input[type="text"]').value = "";

    let movies = document.getElementsByClassName("movieCheck");
    for(let i=0;i<movies.length;i++){
        movies[i].checked = false;
    }
}
