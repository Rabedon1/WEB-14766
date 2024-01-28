const Toggle = document.querySelector(".toggle")
const NavMenu = document.querySelector(".navMenu")

Toggle.addEventListener("click", ()=>{
    NavMenu.classList.toggle("navMenu_visible")
})


const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});