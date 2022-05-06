let weeks = document.querySelectorAll(".week")

console.log(weeks)

for(let i = 0; i < weeks.length; i ++){
    weeks[i].childNodes[1].innerHTML = "Pichanga 11:00 pm"
}