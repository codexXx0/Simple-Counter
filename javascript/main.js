let countEl = document.getElementById("count-el")

let minuesEl= document.getElementById("minues-el")
let resetEl = document.getElementById("reset-el")
let plusEl  = document.getElementById("plus-el")

count=0

function minues() {
    count = count - 1
    countEl.textContent= count 
}
minues()

function reset() {
    count = 0
    countEl.textContent= count 
}
reset()

function plus() {
    count = count + 1
    countEl.textContent= count 
}
reset()