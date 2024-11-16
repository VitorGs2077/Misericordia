document.getElementById('bt2').style.visibility = 'hidden'
document.getElementById('bt3').style.visibility = 'hidden'
function misericordia() {
    const audio = new Audio("porminhavida.mp3")
    audio.play()
    document.getElementById("titulo").innerHTML = ""
    document.getElementById('bt').style.visibility = 'hidden'
    document.getElementById("img1").src = "img/🐘🍓.jpg"
    document.getElementById('bt2').style.visibility = 'visible'
    document.getElementById('bt3').style.visibility = 'visible'
}
