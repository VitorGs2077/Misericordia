function misericordia() {
    document.location = "pg1.html"

}
document.getElementById('playButton').addEventListener('click', () => {
    const audio = new Audio('snd/porminhavida.mp3')
    audio.play()
});