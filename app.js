//get element from html
const keys = document.querySelectorAll(".keys")
const body = document.querySelector("body")


//define app varable
var whiteKeys = 'asedrfgyhujiklo;'



keys.forEach(key => {
    key.addEventListener("click", () => {
        playNote(key)
    })
});


function playNote(key) {
    const audio = document.getElementById(key.dataset.note)
    audio.currentTime = 0
    audio.play()
    key.classList.add("play")
    setTimeout(() => {
        key.classList.remove("play")
    }, 500)
}


body.addEventListener("keypress", (e) => {
    console.log(whiteKeys.indexOf(e.key));
    
    if(whiteKeys.includes(e.key)){
        playNote(keys[whiteKeys.indexOf(e.key)])
    } 
})