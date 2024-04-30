//TOGGLE
let darkMode = localStorage.getItem("darkMode") || false;
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const enableDarkMode = () => {

    document.body.classList.add('darkMode');
    darkMode = "enabled"
    localStorage.setItem('darkMode', 'enabled');
    darkModeToggle.textContent = "🌚"

}
const disableDarkMode = () => {

    document.body.classList.remove('darkMode');
    darkMode = "null"

    localStorage.setItem('darkMode', null);
    darkModeToggle.textContent = "🌞"
}

if (darkMode === "enabled") {
    enableDarkMode();
}
darkModeToggle.addEventListener('click', () => {
    console.log(darkMode)
    if (darkMode !== "enabled") {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log(darkMode);
    }
})