var confirmation = false
var imageElement = document.getElementsByTagName('img')
var linkImg = ''

function redirect() {

    if (confirmation == true) {
        localStorage.setItem('url_image', `${linkImg}`)
        window.location.href = 'game.html'
    } else {
        alert('Antes selecione uma imagem')
    }

}

function mudar(x) {
    linkImg = imageElement[x].src
    confirmation = true
}



/* imageElement[0].onclick = function mudar() {
    linkImg = imageElement[0].src
    confirmation = true

}

imageElement[1].onclick = function mudar() {
    linkImg = imageElement[1].src
    confirmation = true
}

imageElement[2].onclick = function mudar() {
    linkImg = imageElement[2].src
    confirmation = true
}

imageElement[3].onclick = function mudar() {
    linkImg = imageElement[3].src
    confirmation = true
}
imageElement[4].onclick = function mudar() {
    linkImg = imageElement[4].src
    confirmation = true
}
imageElement[5].onclick = function mudar() {
    linkImg = imageElement[5].src
    confirmation = true
    
} */







