let button = document.getElementById("button")
var numberInShape = 1
var oldValue = 0
button.onclick=()=>{
    let n=document.getElementById("number").value
    const circle=document.getElementById("circle")
    const square=document.getElementById("square")
    const rectangle=document.getElementById("rectangle")
    const $box=document.getElementById("box")
    let j
    n = Number(n)+ Number(oldValue)
    for(let j=numberInShape; j<=n; j++){
        var shape= document.createElement("div")
        shape.innerHTML +=numberInShape
        if(circle.checked){
            shape.classList.add("circle")
            } else if(square.checked){
            shape.classList.add("square")
            } else if(rectangle.checked){
            shape.classList.add("rectangle")
        }
        $box.appendChild(shape)
        numberInShape++
        oldValue=document.getElementById("box").lastElementChild.innerHTML
    }
}