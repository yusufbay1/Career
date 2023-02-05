window.onscroll = function () { headerScroll() };

let header = document.querySelector(".header");
let sticky = header.offsetTop;

function headerScroll() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

const menuToggle = document.querySelector("#nav-bar");
const navigationUl = document.querySelector("#navigation ul");

menuToggle.addEventListener("click", (e) => {
    e.preventDefault();
    navigationUl.classList.toggle("active");
});

let cards = document.querySelectorAll('.sub-design');

function liveSearch() {
    let search_query = document.getElementById("searchbox").value;
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].innerText.toLowerCase()
            .includes(search_query.toLowerCase())) {
            cards[i].classList.remove("is-hidden");
        } else {
            cards[i].classList.add("is-hidden");
        }
    }
}

let typingTimer;
let typeInterval = 500;
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});

function maxWidth(max) {
    if (max.matches) {
        let userLogin = document.querySelector('.user-login');
        let userSign = document.querySelector('.user-signup')
        let mobileNav = document.querySelector('#navigation ul');
        mobileNav.append(userLogin, userSign);
    }
}
const max = window.matchMedia("(max-width:991px)");
maxWidth(max);
max.addEventListener(maxWidth);
