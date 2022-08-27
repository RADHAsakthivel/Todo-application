const form = document.getElementById("form")
const input = document.getElementById("input")
const post = document.getElementById("button")
const message = document.getElementById("message")
const display = document.getElementById("display")
const deleteButton = document.getElementById("delete")
const editButton = document.getElementById("edit")
const valueInput = input.value

form.addEventListener("submit",(e) => {
    e.preventDefault();
    console.log(input.value);
    formValidation();
});

let formValidation =() => {
    if(input.value ){
        message.innerHTML=""
        getdata()
    }else{
        message.innerHTML="please enter some text"    
    }
}

let getdata = () =>{
    display.innerHTML+=`<div>
    <span id="result">${input.value}</span>
    <button onClick="editBtton(this)" id="edit">edit</button>
    <button onClick="deleteBtton(this)" id="delete" >delete</button>
    </div><br>`
    input.value = ""
}

let deleteBtton = (e) => {
    e.parentElement.remove()
} 

let editBtton = (e) => {
    console.log("e=>",e.previousElementSibling);
    input.value=e.previousElementSibling.innerHTML
    e.parentElement.remove()
}