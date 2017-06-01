function rippleButton(btn, duration = 500, color = 'rgba(255,255,255,0.5)'){
	// Set up the click event
	btn.addEventListener('click', function(e){
		// Setup the ripple circle
		var circle = document.createElement('div');
		circle.classList.add('btnRipple');
		circle.style.backgroundColor = color;
		circle.style.WebkitAnimationDuration = duration + 'ms';
		circle.style.MozAnimationDuration = duration + 'ms';
		circle.style.animationDuration = duration + 'ms';

		// Get dimension
		var dimension = Math.max(btn.clientWidth, btn.clientHeight);

		// Position and set the size of the circle
		circle.style.width = dimension + 'px';
		circle.style.height = dimension + 'px';
		circle.style.left = e.clientX - btn.offsetLeft - (dimension / 2) + 'px';
		circle.style.top = e.clientY - btn.offsetTop - (dimension / 2) + 'px';

		// Add the circle to the button
		btn.appendChild(circle);

		// Terminate circle once the animation is done
		setTimeout(function(){
			btn.removeChild(circle);
		}, duration); // Duration in ms
	});
}
