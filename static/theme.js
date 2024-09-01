var themeInterval;

function styleOption(name, value) {
	const previous = localStorage.getItem(name);

	switch (value) {
		case undefined:
			value = previous;
			break;
		case true:
			value = name;
			break;
		case false:
			value = "";
			break;
	}

	if (document.documentElement.classList.contains(previous)) {
		document.documentElement.classList.remove(previous);
	}
	if (typeof(value) === "string" && value !== "") {
		document.documentElement.classList.add(value);
	}

	if (value && document.getElementById(value) && !document.getElementById(value).checked) {
		document.getElementById(value).checked = true;
	}

	localStorage.setItem(name, value);

	// Cleanup decorations
	if (name === "theme" && previous !== value) {
		clearInterval(themeInterval);
		switch (previous) {
			case "night":
				document.querySelectorAll("body > div.star").forEach(element => {element.remove()});
				break;
			case "terminal":
				document.getElementById("matrix").remove();
				break;
		}
	}
	// Generate decorations
	if (name === "theme") {
		switch (value) {
			case "night":
				stars();
				break;
			case "terminal":
				matrix();
				break;
		}
	}

	// This hack is only for first-time initialization with no value
	return value && value !== "null" ? document.getElementById(value) : {};
}

function stars() {
	for (let i = 0; i < document.documentElement.scrollHeight / 10; i++) {
		const star = document.createElement("div");
		star.classList = ["star"];
		Object.assign(star.style, {
			top: Math.floor(Math.random() * document.documentElement.scrollHeight) + "px",
			left: Math.floor(Math.random() * document.documentElement.scrollWidth) + "px",
			animation: "twinkle " + Math.floor(Math.random() * 5 + 5) + "s linear infinite",
		});
		document.body.appendChild(star);
	}
}

function matrix() {
	const canvas = document.createElement('canvas');
	canvas.id = "matrix";
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	document.body.appendChild(canvas);

	var ctx = canvas.getContext("2d");
	var fontSize = parseFloat(getComputedStyle(document.body).fontSize) * 1.25;
	var drops = [];

	for (let x = 0; x < canvas.width / fontSize; x++) {
		drops[x] = canvas.height;
	}

	themeInterval = setInterval(() => {
		ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = window.getComputedStyle(document.body).getPropertyValue('--accent').substring(0, 7) + "40";
		ctx.font = fontSize + "px monospace";

		for (let i = 0; i < drops.length; i++) {
			ctx.fillText(String.fromCodePoint(Math.floor(Math.random() * 0xFFFF)), i * fontSize, drops[i] * fontSize, fontSize);

			if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
				drops[i] = 0;
			}

			drops[i]++;
		}
	}, 65535 / window.innerHeight);
}

styleOption("theme").checked = true;
styleOption("font").checked = true;
styleOption("lowercase").checked = true;
