
function rollDice(){
    const noOfDice = document.getElementById("noOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");
    const values = [];
    const images = [];

    for(let i = 0; i < noOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="image/${value}.png" alt="Dice ${value}">`);
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImage.innerHTML = images.join(' ');
}