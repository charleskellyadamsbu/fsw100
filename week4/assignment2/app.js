let navbar = document.getElementById('navbar');
let background = document.getElementById('landing');
let navbarLogo = document.getElementById('navbar-logo');
let navbarLinks = document.getElementsByClassName('navbar-link');
let content = document.getElementById('content');

window.addEventListener('scroll', (Event) => {
    if(window.scrollY > background.getBoundingClientRect().height) {
        navbar.style.backgroundColor = "rgb(230, 230, 230)";
        navbar.style.borderBottom = "1px solid black";
        navbarLogo.style.color = "black";

        let count = navbarLinks[0].children;
        for(let k = 0; k < navbarLinks.length; k++) {
            for(let i = 0; i < count.length; i++) {
                navbarLinks[k].children[i].style.color = "black";
            }
        }
    } else {
        navbar.style.backgroundColor = "rgb(82, 72, 72)";
        navbar.style.borderBottom = "0px solid black";
        navbarLogo.style.color = "white";

        let count = navbarLinks[0].children;
        for(let k = 0; k < navbarLinks.length; k++) {
            for(let i = 0; i < count.length; i++) {
                navbarLinks[k].children[i].style.color = "white";
            }
        }
    }
});

let scrollY = 0;

function buttonScrollDown() {
    window.scroll(0, window.scrollY + 1);
}

