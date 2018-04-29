const menuBtn = document.getElementsByClassName('menu-btn')[0],
	navBar = document.getElementsByClassName('navbar')[0],
	navMenu = document.getElementsByClassName('nav-menu')[0];

let navMenuOpen = 0;

function openNavigation(){
	menuBtn.classList.add('pressed');
	navBar.classList.add('black');
	navMenu.classList.add('shown');
};

function closeNavigation(){
	menuBtn.classList.remove('pressed');
	navBar.classList.remove('black');
	navMenu.classList.remove('shown');
};

menuBtn.addEventListener('click', () => {
	if (navMenuOpen === 1){
		closeNavigation();
		navMenuOpen = 0;
	}else{
		openNavigation();
		navMenuOpen = 1;
	}
});

// SCRIPS TO LOAD ONCE THE PAGE IS LOADED
window.addEventListener('load', () => {
	// PRELOADER ANIMATION
	let preloader = document.getElementById('preloader');
	preloader.classList.add('animated');
	setTimeout(() => {
		preloader.classList.remove('shown');
	}, 700);

	// SCROLLREVEAL CONFIG
	window.sr = ScrollReveal();

	function grabElements(elem){
		return document.getElementsByClassName(elem);
	}
	
	let fadeInTop = grabElements('fadeInTop'),
		fadeInBottom = grabElements('fadeInBottom'),
		fadeInRight = grabElements('fadeInRight'),
		fadeInLeft = grabElements('fadeInLeft'),
		fadeInTopSeq = grabElements('fadeInTopSeq');
	
	sr.reveal(fadeInTop, {
		duration: 1500,
		origin: 'top',
		distance: '50vh',
		viewFactor: 0.2
	});
	
	sr.reveal(fadeInBottom, {
		duration: 1500,
		origin: 'bottom',
		distance: '50vh',
		viewFactor: 0.2
	});
	
	sr.reveal(fadeInRight, {
		duration: 1500,
		origin: 'right',
		distance: '50vw',
		viewFactor: 0.2,
		opacity: 0
	});
	
	sr.reveal(fadeInLeft, {
		duration: 1500,
		origin: 'left',
		distance: '50vw',
		viewFactor: 0.2,
		opacity: 0
	});
	
	sr.reveal(fadeInTopSeq, {
		duration: 1500,
		origin: 'top',
		distance: '100px',
		viewFactor: 0.2,
		opacity: 0
	}, 100);
});