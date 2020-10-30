
var res = document.getElementById('game')
var urlImg = localStorage.getItem('url_image')
var posxImg = 200
var posyImg = 0

var posyDiv = 0
var conf = true

var imgCreate = document.createElement('img')
imgCreate.setAttribute('src', `${urlImg}`)
res.appendChild(imgCreate)
imgCreate.style.position = 'absolute'
imgCreate.style.right = posxImg + 'px'
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
        posyDiv = 0
        
}


function andar() {
        posyDiv++
        objeto.style.right =  posyDiv + 'px'
        
}


document.onclick = function() {
        posyImg -= 70
        
        
        
}
setInterval(mover, 6)
createObject()
setInterval(andar, 10)
setInterval(createObject, 4000)




