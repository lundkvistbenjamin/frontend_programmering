

function write(){
    console.log("functionen kördes")
}

write()

let namn = "hello"


function buttonHandler(){
    alert("du klickade här")
}

function secondButton(){
    const namn = prompt("Vad heter du?")

    alert("Hello" + namn)


}
const namn1 = namnInput.value
function thirdButton(){
    let namnInput = document.querySelector("#namn").value

    if (namnInput == "Fredde" || namnInput == "Fredrik"){
        namnInput = namnInput + " Welander"
    }

    document.querySelector("#hello-output").innerText = `Morjens ${namnInput}!`
}

