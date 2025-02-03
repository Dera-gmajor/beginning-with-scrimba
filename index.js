let hom = document.getElementById("hommie")
let gue = document.getElementById("guestie")
let count = 0
let count2 = 0

function button1() {
    count = count + 1
    hom.textContent = count
}

function button2() {
    count = count + 2
    hom.textContent = count
}

function button3() {
    count = count + 3
    hom.textContent = count
}

function button1g() {
    count2 = count2 + 1
    gue.textContent = count2
}

function button2g() {
    count2 = count2 + 2
    gue.textContent = count2
}

function button3g() {
    count2 = count2 + 3
    gue.textContent = count2
}

function startgame() {
    gue.textContent = 0
    count2 = 0
    hom.textContent = 0
    count = 0
}
