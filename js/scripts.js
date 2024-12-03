function toggleMobileMenu() {
	document.getElementById('navigation-menu').classList.toggle('active');
}

const navigationHeight = document.querySelector('header').offsetHeight;
document.documentElement.style.setProperty(
	'--scroll-padding',
	navigationHeight - 1 + 'px'
);
