const minTime = 20 
const maxTime = 180

function getPtFeedback() {
    console.log("getPtFeedback()")
    const minuter = Number(document.querySelector("#minuter").value)
    let outputText = "Bra jobbat, fortsätt i samma stil!"

    if (minuter == 0) {
        outputText = "En vilodag är ok, men låt det inte bli en vana!"
    } else if (minuter < minTime) {
        outputText =`I kortaste laget, men du borde träna minst ${minTime} minuter!`
    } else if (minuter > maxTime) {
        outputText = `Det var hurtigt av dig, men träna helst inte mer än ${maxTime} minuter!`
    } 

    console.log(outputText)
    document.querySelector("#out").innerText = outputText
}