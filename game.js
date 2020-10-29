
var res = document.getElementById('game')
var urlImg = localStorage.getItem('url_image')
console.log(urlImg)
var imgCreate = document.createElement('img')
imgCreate.setAttribute('src', `${urlImg}`)

res.appendChild(imgCreate)