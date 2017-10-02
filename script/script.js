window.onload=function(){
var hamburger = document.querySelector('.res__nav__btn'),
	hamburgerIcon = document.querySelector('.fa'),
	naviagtionResponsive = document.getElementById('js-res__nav')

hamburger.addEventListener('click', function(){
		
	if( !naviagtionResponsive.style.display || naviagtionResponsive.style.display === 'none'){
		naviagtionResponsive.style.display = 'block';
		hamburgerIcon.classList.remove('fa-bars');
		hamburgerIcon.classList.add('fa-times');
		
	} else {
		naviagtionResponsive.style.display = 'none';
		hamburgerIcon.classList.add('fa-bars');
		hamburgerIcon.classList.remove('fa-times');
	}
	
})
}