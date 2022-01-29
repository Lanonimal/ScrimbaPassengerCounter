const btn = document.getElementById('increment-btn')
const saveBtn = document.getElementById('save-btn')
let countEl = document.getElementById('countEl')
let saveEl = document.getElementById('saveEl')

let count = 0

function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    countEl.textContent = 0
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
}

