const addP1 = () =>{
    let player1life = parseInt(document.getElementById('player1life').textContent)
    let newTotal 
    newTotal= player1life + 1
    document.getElementById('player1life').textContent = newTotal
}

const addP2 = () =>{
    let player2life = parseInt(document.getElementById('player2life').textContent)
    let newTotal 
    newTotal= player2life + 1
    document.getElementById('player2life').textContent = newTotal
}

const subtractP1 = () =>{
    let player1life = parseInt(document.getElementById('player1life').textContent)
    let newTotal 
    newTotal= player1life - 1
    document.getElementById('player1life').textContent = newTotal
}

const subtractP2 = () =>{
    let player2life = parseInt(document.getElementById('player2life').textContent)
    let newTotal 
    newTotal= player2life - 1
    document.getElementById('player2life').textContent = newTotal
}

const reset = () =>{
    document.getElementById('player1life').textContent = 20
    document.getElementById('player2life').textContent = 20
}
const winp1 = () =>{
    let player1wins = document.getElementById('player1wins')
    let newTotal = player1wins.textContent ++
    player1wins.textContent = newTotal
}
document.querySelector('#reset').addEventListener('click', () => reset())
document.querySelector('#addP1').addEventListener('click', () => addP1())
document.querySelector('#addP2').addEventListener('click', () => addP2())
document.querySelector('#subtractP1').addEventListener('click', () => subtractP1())
document.querySelector('#subtractP2').addEventListener('click', () => subtractP2())
document.querySelector('#p1winsbtn').addEventListener('click', () => winp1())