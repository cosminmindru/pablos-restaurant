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