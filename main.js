const navMenu = document.querySelector(".nav_menu");
const navToggle = document.querySelector(".nav_toggle");

if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.toggle("show_menu");
	});
}
// remove link when click
const navLink = document.querySelectorAll(".nav_link");
const removeHeader = () => {
	navMenu.classList.remove("show_menu");
};

navLink.forEach((n) => n.addEventListener("click", removeHeader));

// Accordion
const faqHeader = document.querySelectorAll(".faq_header");
const accordion = document.querySelectorAll(".accordion");

faqHeader.forEach((n, i) => {
	n.addEventListener("click", () => {
		accordion[i].classList.toggle("show_accordion");
		accordion[i].parentElement.classList.toggle("open_accordion");
	});
});

// scroll_header
const header = document.querySelector(".header");
const scrollHeader = () => {
	this.scrollY > 50
		? header.classList.add("scroll_header")
		: header.classList.remove("scroll_header");
};
window.addEventListener("scroll", scrollHeader);

// show scrollup
const scrollUp = document.querySelector(".scroll_up");
const scrollTop = () => {
	this.scrollY > 350
		? scrollUp.classList.add("show_scrollup")
		: scrollUp.classList.remove("show_scrollup");
};
window.addEventListener("scroll", scrollTop);
