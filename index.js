const hamburgerMenu = document.getElementById("hamburger-menu");
const mobileNavbar = document.getElementById("mobile-navbar");

hamburgerMenu.addEventListener("click", openNavbar);

function openNavbar() {
	mobileNavbar.classList.toggle("open-mobile-navbar");
}
