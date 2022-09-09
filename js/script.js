const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2000,
	reset: true
})

sr.reveal('.home-text',{delay:100, origin:'left'})
sr.reveal('.about-image',{delay:50, origin:'right'})

sr.reveal('.about,.skills,.projects,.contact',{delay:100, origin:'bottom'})

