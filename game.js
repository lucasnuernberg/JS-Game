
var res = document.getElementById('game')
var urlImg = localStorage.getItem('url_image')
var posxImg = 0
var posyImg = 0

var posxDiv = 0
var confirmação = false

var imgCreate = document.createElement('img')
imgCreate.setAttribute('src', `${urlImg}`)
res.appendChild(imgCreate)
imgCreate.style.position = 'absolute'
imgCreate.style.left = posxImg + 'px'
imgCreate.style.top = posyImg + 'px'



//funções 

//gera números aleatórios
function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
}

function mover() {    
        posyImg += 1
        imgCreate.style.top = posyImg + 'px'
}




function createObject() {
        let posicao = getRandomInt(0, 450)
        objeto = document.createElement('div')
        objeto.setAttribute('class', 'eneme')
        objeto.style.width = '30px'
        objeto.style.height = '100px'
        objeto.style.backgroundColor = 'black'
        objeto.style.position = 'absolute'
        objeto.style.right = 0
        objeto.style.top = posicao + 'px'
        res.appendChild(objeto) 
        posxDiv = 0
        
}


function andar() {
        posxDiv++
        objeto.style.right =  posxDiv + 'px'
        
}

document.onclick = function() {
        posyImg -= 70
}
setInterval(mover, 6)
createObject()
setInterval(andar, 10)
setInterval(createObject, 4000)


