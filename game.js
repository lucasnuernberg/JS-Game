
var res = document.getElementById('game')
var urlImg = localStorage.getItem('url_image')
var posxImg = 220
var posyImg = 0

var posxDiv = 0
var posyDiv = 0
var conf = true

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
        posxDiv = 0         
              
}


function andarDiv() {
        posxDiv++
        objeto.style.right =  posxDiv + 'px'
        
}
        
        


document.onclick = function() {
        posyImg -= 70       
        
        
}

function verificar() {
        if (posyImg + 50 >= posyDiv & posyImg <= posyDiv + 100 & posxDiv + 25 == posxImg) {
                document.location.href = 'gameover.html'
        }
}

createObject()
setInterval(moverImg, 5)
setInterval(andarDiv, 5)
setInterval(createObject, 2900)
setInterval(verificar, 0.001)

//lógica da colisão frontal 
//ainda falta fazer a lógica da colisão vertical 

/* if (posyImg + 50 >= posyDiv & posyImg <= posyDiv + 100 & posxDiv + 25 == posxImg) {
        console.log(posyImg)
        alert(posyDiv)
} */



