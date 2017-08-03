
var colorPick = document.getElementById("colorPicker");

document.body.addEventListener("click", function(event){
    
    if (event.target.className == "pixel")
        {
        var pixel = event.target;

        if(pixel.getAttribute("data-colored") == "false"){
            pixel.style.backgroundColor = colorPick.value;
            pixel.setAttribute("data-colored", "true");
        }
        else{
            pixel.style.backgroundColor = "#ffffff";
            pixel.setAttribute("data-colored","false");
}}})

var isMouseDown = false;
document.body.addEventListener("mousedown", function(event){
    isMouseDown = true;
})
document.body.addEventListener("mouseup", function(event){
    isMouseDown = false;
})
document.body.addEventListener("mousemove", function(event){
    
    if (event.target.className == "pixel" && isMouseDown)
        {

        event.target.style.backgroundColor = colorPick.value;
        event.target.setAttribute("data-colored", "true");
}})


