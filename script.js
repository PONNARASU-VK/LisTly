// select overlay
var overlay = document.getElementById("overlay")

// select popupbox
var popup = document.getElementById("popup")

// select + button
var plusbutton = document.getElementById("add-popup")

// select cancelbutton
var cancelbutton = document.getElementById("cancelbutton")

// add eventlisterner for overlay and popupbox
plusbutton.addEventListener('click', function(){
overlay.style.display= "block";
popup.style.display= "block";
})

// add eventlisterner for overlay and popupbox
cancelbutton.addEventListener('click', function(event){
    event.preventDefault();
    overlay.style.display= "none";
popup.style.display= "none";
})

// select container, addnotebutton, inputbox, textarea, editnote
var container = document.querySelector(".container")
var addnotebtn = document.getElementById("addnotebtn")
var inputtitle = document.getElementById("inputtitle")
var inputdes = document.getElementById("inputdes")
var editnote = document.getElementById("editnote")


addnotebtn.addEventListener('click', function(event){
    event.preventDefault();

    var createbox = document.createElement("div")
    createbox.setAttribute("class", "notes-container")
    createbox.innerHTML= ` <h2>${inputtitle.value}</h2>
    <p>${inputdes.value}</p>
    <button id="addnote" onclick="deletenote(event)">Delete</button> `
    container.append(createbox)
    overlay.style.display= "none";
    popup.style.display= "none";
    inputtitle.value = "";
    inputdes.value = "";
    })

// create function for delete notes
function deletenote(event)
{
    event.target.parentElement.remove();
}

