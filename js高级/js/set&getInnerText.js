function setInnerText(element, text) {
	if (typeof element.textContent == "undefined") {
		element.innerText = text;

	} else {
		element.textContent = text;
	}

}

function getInnerText(element) {
	if (typeof element.textContent == "undefined") {
		return element.innerText;

	} else {
		return element.textContent;
	}
}
