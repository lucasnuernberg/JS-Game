var mainButtom = document.getElementById('selectCharacter')

mainButtom.onclick = function() {
    window.location.href = 'game.html'
}

var imageElement = document.getElementsByTagName('img')
for (var x = 0; x < imageElement.length; x++) {
    imageElement[x].onclick = function() {
        var selecionada = x
        console.log(selecionada)
    }
}
console.log(selecionada)



