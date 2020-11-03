
var res = document.getElementById('game')
var urlImg = localStorage.getItem('url_image')
var posxImg = 220
var posyImg = 0

var posxDiv = 0
var posyDiv = 0

var confirmar = false

var pontos = 0

var pontoHtml = document.getElementById('ponto')


var imgCreate = document.createElement('img')
imgCreate.setAttribute('src', `${urlImg}`)
imgCreate.style.width = '50px'
imgCreate.style.height = '50px'
imgCreate.style.position = 'absolute'
imgCreate.style.right = posxImg + 'px'
imgCreate.style.top = posyImg + 'px'
imgCreate.style.margin = 0
imgCreate.style.padding = 0
res.appendChild(imgCreate)



//funções 

//gera números aleatórios
function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
}

function moverImg() {    
        posyImg += 1
        imgCreate.style.top = posyImg + 'px'
}




function createObject() {
        if (confirmar == true) {
                removerChild(objeto)
        }
        posyDiv = getRandomInt(0, 450)          
        objeto = document.createElement('div')
        objeto.setAttribute('class', 'eneme')
        objeto.style.width = '25px'
        objeto.style.height = '100px'
        objeto.style.backgroundColor = 'black'
        objeto.style.position = 'absolute'
        objeto.style.right = posxDiv + 'px'
        objeto.style.borderRadius = '100px'
        objeto.style.top = posyDiv + 'px'
        res.appendChild(objeto)
        pontoHtml.innerHTML = pontos
        posxDiv = 0
        pontos++
        confirmar = true


              
}


function andarDiv() {
        posxDiv += 1
        objeto.style.right =  posxDiv + 'px'
        
}
        
        


document.onclick = function() {
        posyImg -= 50  
        
}

function verificar() {
        if (posyImg + 50 >= posyDiv & posyImg <= posyDiv + 100 & posxDiv + 25 == posxImg) {
                localStorage.setItem('pontos', `${pontos}`)                
                document.location.href = 'gameover.html'
        }
        if (posyImg < 0 || posyImg >= 480) {
                document.location.href = 'gameover.html'
                localStorage.setItem('pontos', `${pontos}`) 
        }
}

function removerChild(objeto) {
        res.removeChild(objeto)
}

createObject()
setInterval(moverImg, 6)
setInterval(andarDiv, 4)
setInterval(createObject, 2900)
setInterval(verificar, 0.001)

//lógica da colisão frontal 
//ainda falta fazer a lógica da colisão vertical 

/* if (posyImg + 50 >= posyDiv & posyImg <= posyDiv + 100 & posxDiv + 25 == posxImg) {
        console.log(posyImg)
        alert(posyDiv)
} */



