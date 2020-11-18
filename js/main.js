const hamburger = document.getElementById('hamburger');
const addBar = document.getElementById('add-bar');
const headerSection = document.getElementById('header-section');

hamburger.addEventListener('click', () => {
	addBar.classList.toggle('active');
});
