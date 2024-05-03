// Collect user inputs and submit button.
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const createForm = document.querySelector("#form-blog");

//Add event listener function to sumbit button.
createForm.addEventListener("submit",(event) => {
event.preventDefault()

let userObjects = JSON.parse(localStorage.getItem("driverinfo")) || [];

let userObject =
{
        Title: titleInput.value,
        Content: contentInput.value,
        Username: usernameInput.value,
}
console.log(userObject)
userObjects.push(userObject)
localStorage.setItem("driverinfo", JSON.stringify(userObjects));
window.location.href="blog.html"
})





  







  













