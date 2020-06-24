const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", () => {
        const pageId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${pageId}`

    })
}

document.querySelector(".close-modal").addEventListener("click", () => {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector(".modal").classList.remove("modal-in-full-screen")
    modalOverlay.querySelector("iframe").src =""
    document.getElementById("fullscreen").style.visibility= "visible"


})

document.querySelector(".max-modal").addEventListener("click", ()=>{
    modalOverlay.querySelector(".modal").classList.add("modal-in-full-screen")
    document.getElementById("fullscreen").style.visibility= "hidden"

    
})




