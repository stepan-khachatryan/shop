window.addEventListener("scroll", function(){
	document.querySelector("header").classList.toggle("sticky", window.scrollY > 0);
})

function scrollHide(){
	if(document.getElementById('check').checked == true) {
		var vody = document.getElementById('body').style.overflow = "hidden";
	}
	else{
		body.style.overflow = "visible";
	}
}

function menuItem(){
	document.getElementById('check').checked = false;
	document.getElementById('body').style.overflow = "visible";
}

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	}
	else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}