const menuBtn = document.getElementsByClassName('menu-btn')[0],
	navBar = document.getElementsByClassName('navbar')[0],
	navMenu = document.getElementsByClassName('nav-menu')[0];

let navMenuOpen = false;

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
	if (navMenuOpen){
		closeNavigation();
		navMenuOpen = false;
	}else{
		openNavigation();
		navMenuOpen = true;
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
	sr = ScrollReveal();
	
	sr.reveal('.fadeInTop', {
		duration: 1500,
		origin: 'top',
		distance: '500px',
		viewFactor: 0.2
	});
	
	sr.reveal('.fadeInBottom', {
		duration: 1500,
		origin: 'bottom',
		distance: '500px',
		viewFactor: 0.2
	});
	
	sr.reveal('.fadeInRight', {
		duration: 1500,
		origin: 'right',
		distance: '500px',
		viewFactor: 0.2,
		opacity: 0
	});
	
	sr.reveal('.fadeInLeft', {
		duration: 1500,
		origin: 'left',
		distance: '500px',
		viewFactor: 0.2,
		opacity: 0
	});
	
	sr.reveal('.fadeInTopSeq', {
		duration: 1500,
		origin: 'top',
		distance: '100px',
		viewFactor: 0.2,
		opacity: 0
	}, 100);
});