
const backButton = document.querySelector("#back-button");
backButton.addEventListener('click', function() {
    window.location.href="index.html";
  });

const blogContainer = document.querySelector('#blog-container');

window.addEventListener('load', function (event) {
  event.preventDefault();
  let userObjects = JSON.parse(localStorage.getItem('driverinfo'));
  
  for(let i = 0; i < userObjects.length; i++) {
    const userObject = userObjects[i];
    const ul = document.createElement('ul'); 
    const li = document.createElement('li');

    li.textContent = 'Posted by: ' + userObject.Username;
    li.setAttribute('data-index', i);
    const hr = document.createElement('hr');
    const li2 = document.createElement('li');
    li2.textContent = userObject.Content;
    li2.setAttribute('data-index', i);
    const li3 = document.createElement('li');
    li3.textContent = userObject.Title;
    li3.setAttribute('data-index', i);
    
    blogContainer.appendChild(ul);
    ul.appendChild(li3);
    ul.appendChild(li2);
    ul.appendChild(li);
    ul.appendChild(hr);
}
});
