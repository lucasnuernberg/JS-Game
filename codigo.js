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
