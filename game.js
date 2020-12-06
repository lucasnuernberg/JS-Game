
var res = document.getElementById('game')

var deg = 0
var confirmar = false

var record;

var pontos = 0
var pontoHtml = document.getElementById('ponto')
var velocidade = 4
var tempoCreate = 2000

function aumentoVelo() {
        velocidade -= 0.1
        tempoCreate -= 100
}

var urlImg = localStorage.getItem('url_image')
var posxImg = 260
var posyImg = 0
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

function moverImg() {    
        posyImg += 1
        imgCreate.style.top = posyImg + 'px'
}


//gera números aleatórios
function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
}



var posxDiv = -10
var posyDiv = 0

function createObject() {
        if (confirmar == true) {
                removerChild(objeto)
        }

        posyDiv = getRandomInt(0, 450)          
        objeto = document.createElement('img')
        objeto.setAttribute('src', 'images/shu.png')
        objeto.setAttribute('id', 'imgShu')
        objeto.style.width = '80px'
        objeto.style.height = '80px'
        //objeto.style.backgroundColor = 'black'
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
        posyImg -= 60 
        
}

function verificar() {
        if (posyImg + 50 >= posyDiv & posyImg <= posyDiv + 100 & posxDiv + 25 == posxImg) {
                localStorage.setItem('pontos', `${pontos}`)               
                document.location.href = 'gameover.html'
        }
        if (posyImg < 0 || posyImg > 480) {
                localStorage.setItem('pontos', `${pontos}`) 
                document.location.href = 'gameover.html'             
        }

}

function removerChild(objeto) {
        res.removeChild(objeto)
}

function rodar() {
        var imageElement = document.getElementById('imgShu')
        imageElement.style.transform = `rotate(${deg}deg)`
        deg += 5
}

    
   


createObject()
setInterval(moverImg, 6)
setInterval(andarDiv, velocidade)
setInterval(createObject, tempoCreate)


setInterval(aumentoVelo, 5000)
setInterval(verificar, 0.0001)
setInterval(rodar, 10)


