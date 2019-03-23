function createStreamingClient(url, progress, finished) {
	var xhr = new XMLHttpRequest(),
		received = 0;
	xhr.open("get", url, true);
	xhr.onreadystatechange = function() {
		var result;
		if (xhr.readyState == 3) {
			result = xhr.responseText.substring(received);
			received += result.length;
			//调用progress回调函数
			progress(result);
		} else if (xhr.readyState == 4) {
			finished(xhr.responseText);
		}
	};
	xhr.send(null);
	return xhr;
}
