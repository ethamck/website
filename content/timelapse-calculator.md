+++
title = "Timelapse Calculator"
description = "Calculate the interval to take pictures with given how many you can store, framerate, and how long the event is."
+++

<noscript>This calculator requires JavaScript.</noscript> You need to know

-
	The number of pictures you can get off a single storage card or battery charge

	<input id="frames" type="number" placeholder="Pictures"/>

-
	How long your recording session is

	<input id="h" type="number" placeholder="Hours"/>
	<input id="m" type="number" placeholder="minutes"/>
	<input id="s" type="number" placeholder="seconds"/>

-
	Framerate of output video

	<input id="fps" type="number" value="24" placeholder="Frames per second"/>

and you can calculate to find interval by dividing the seconds in your session by the framerate. <span id="interval"></span>

<span id="time"></span>

<script>
	function rerender() {
		var session = (document.getElementById("h").value * 3600) + (document.getElementById("m").value * 60) + (document.getElementById("s").value * 1);
		var interval = Math.round(session / document.getElementById("frames").value);
		var final = document.getElementById("frames").value / Number(document.getElementById("fps").value);

		document.getElementById("interval").innerHTML = "With your configuration it's " + interval + " seconds, or " + String(Math.floor(interval / 60)).padStart(2, "0") + ":" + interval % 60 + " minutes.";
		document.getElementById("time").innerHTML = "Given this framerate, the final video becomes " + Math.round(final) + " seconds, " + new Date(final * 1000).toISOString().slice(11, 19) + ".";
	}

	rerender();
	document.currentScript.parentNode.addEventListener("input", rerender);
</script>
