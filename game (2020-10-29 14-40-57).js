
var res = document.getElementById('game')
var urlImg = localStorage.getItem('url_image')

var imgCreate = document.createElement('img')
imgCreate.setAttribute('src', `${urlImg}`)

res.appendChild(imgCreate)

imgCreate.style.position = 'absolute'
var posx = 0
var posy = 0


setInterval(move, 100)



imgCreate.style.left = posx + 'px'
imgCreate.style.top = posy + 'px'

function move() {    
        posx++
        posy++
        imgCreate.style.top = posy + 'px'
        imgCreate.style.left = posx + 'px'        

}

function createObject() {
        var objeto = document.createElement('div')
        objeto.style.width = '30px'
        objeto.style.height = '100px'
        objeto.style.backgroundColor = 'black'
        objeto.style.position = 'absolute'
        objeto.style.right = 0
        objeto.style.top = '400px'
        res.appendChild(objeto)
}

createObject()