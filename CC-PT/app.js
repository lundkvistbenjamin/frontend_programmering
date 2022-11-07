const min = 20; 

const max = 60; 

let input = Number(prompt("Hur länge har du motionerat idag?"))

if (input < 20){
  alert("Bättre kan du!")
} else if (input > 60){
    alert("Chilla lite emellanåt!")
}
  else if (input > 20 && input < 60){
    alert("Bra jobbat!")
}