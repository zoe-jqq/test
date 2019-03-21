function randomFlicker(startId,stopId,divId) {
	var span = document.getElementsByTagName("span");
	startId.onclick = function() {
			aa = setInterval(function() {
			divId.innerHTML = "<span>*</span>"
			var x = parseInt(Math.random() * 220 + 1);
			var y = parseInt(Math.random() * 220 + 1);
			//var span = document.getElementsByTagName("span");
			span[0].style.left = x + "px";
	
			span[0].style.top = y + "px";
		}, 100);
	};
	stopId.onclick = function() {
		clearInterval(aa);
			divId.removeChild(span[0]);
	
	}
}