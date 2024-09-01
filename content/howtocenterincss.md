+++
title = "How to Center in CSS"
description = "A simpler remake of the defunct howtocenterincss.com."
+++

This assumes standards-compliant rendering, which requires a `<!doctype html>` at the top of your document.

Compared to [other resources](https://css-tricks.com/centering-css-complete-guide/), this page gives you a simple few decisions rather than a giant tree. For most purposes, this selects the best solution, zero redundancy.

The [original site](https://web.archive.org/web/20240812122422/https://howtocenterincss.com/) also allowed for <dfn title="Internet Explorer">IE</dfn> compatibility and generated styles like `display: table-cell` or `position: absolute` to support ancient versions of the browser. If that's necessary to you, it's still archived, but from 2020 onward supporting dumb versions of IE is almost entirely unnecessary. IE11 supports flexbox.

You'll need to ensure that the width and height of both the content and container are correct for the alignment to have an effect.

A <samp>(default)</samp> means that one or more properties are redundant.

## What is the element displayed as?

<input id="inline" name="content" type="radio" checked/> <label for="inline">Inline <small>(text, `span`, `a`, ...)</small></label><br/>
<input id="block" name="content" type="radio"/> <label for="block">Block <small>(block, `div`, `p`, ...)</small></label>

## How should it be aligned?

Alignment is based on the text directionality, named using <abbr title="Left to right text">LTR</abbr>. Properties for LTR-only text or <abbr title='Names referring to "top", "right", "bottom", "left"'>cardinal direction</abbr> are not provided.

A height of `5em` is applied to the container for illustrative purposes.

<form>
	<fieldset style="display: inline;">
		<legend>Horizontally</legend>
		<input id="left" name="horizontal" type="radio" checked/> <label for="left">Left</label>
		<input id="center" name="horizontal" type="radio"/> <label for="center">Center</label>
		<input id="right" name="horizontal" type="radio"/> <label for="right">Right</label>
	</fieldset>
	<fieldset style="display: inline;">
		<legend>Vertically</legend>
		<input id="top" name="vertical" type="radio" checked/> <label for="top">Top <abbr title="No effect. For a sticky block, use absolute position.">(none)</abbr></label>
		<input id="middle" name="vertical" type="radio"/> <label for="middle">Middle</label>
		<input id="bottom" name="vertical" type="radio"/> <label for="bottom">Bottom</label>
	</fieldset>
</form>

<input id="multiline" name="multiline" type="checkbox"/> <label for="multiline">Multiline text</label>

<input id="direction" name="direction" type="checkbox" onclick="document.getElementById('preview').dir = this.checked ? 'rtl' : 'ltr'"/> <label for="direction">Preview RTL</label>

<h2 id="method"></h2>
<section id="preview" style="outline: thin dashed; min-height: 5em;"></section>
<pre><code id="style" style="padding-inline-start: 1em;"></code></pre>
<pre><code id="code" style="padding-inline-start: 1em;"></code></pre>
<p id="notes"></p>

<script>
	function rerender() {
		const inline = document.getElementById("inline").checked;

		const left = document.getElementById("left").checked;
		const center = document.getElementById("center").checked;
		const right = document.getElementById("right").checked;

		const top = document.getElementById("top").checked;
		const middle = document.getElementById("middle").checked;
		const bottom = document.getElementById("bottom").checked;

		var method;
		var style;
		var code;
		var notes = "";
		var innerContent = document.getElementById("multiline").checked ? "Inner<br/>content" : "Inner content";

		if (inline && top) {
			method = "Text align";
			style = "text-align: ";
			notes += "If the text itself should not be aligned, try centering a block instead.";

			if (left) {
				method += " (default)";
				style += "start;";
			}
			else if (center) {
				notes += "The container must have a width large enough to align the text in, any width with a \"‑content\" probably won't work. ";
				style += "center;";
			}
			else if (right) {
				style += "end;";
			}

			code = `<div style="${style} /* illustrative: */ min-height: 100%;">\n\t${innerContent}\n</div>`;
		}
		else if (!inline && top) {
			method = "Margin auto";
			style = "width: fit-content; ";
			notes += "The child can be any type, like an image. ";

			if (left) {
				method += " (default)";
				style += "margin-inline-end: auto;";
			}
			else if (center) {
				style += "margin-inline: auto;";
			}
			else if (right) {
				style += "margin-inline-start: auto;";
			}

			code = `<div>\n\t<div style="${style}">\n\t\t${innerContent}\n\t</div>\n</div>`;
		}
		else {
			method = "Flexbox";
			style = "display: flex; align-items: ";

			if (top && left) {
				method += " (default)";
			}

			if (top) {
				style += "flex-begin;"
			}
			else if (middle) {
				style += "center;";
			}
			else if (bottom) {
				style += "flex-end;";
			}

			style += " justify-content: ";

			if (left) {
				style += "start;";
			}
			else if (center) {
				if (middle) {
					notes += "If your content is one line, use padding. ";
				}
				style += "center;";
			}
			else if (right) {
				style += "end;";
			}

			if (inline) {
				code = `<div style="${style} /* illustrative: */ min-height: 100%;">\n\t${innerContent}\n</div>`;
			}
			else {
				code = `<div style="${style} /* illustrative: */ min-height: 100%;">\n\t<div>\n\t\t${innerContent}\n\t</div>\n</div>`;
			}
		}

		document.getElementById("method").innerHTML = method;
		document.getElementById("code").innerHTML = "";
		document.getElementById("code").appendChild(document.createTextNode(code));
		document.getElementById("style").innerHTML = "";
		document.getElementById("style").appendChild(document.createTextNode(style.replaceAll("; ", ";\n")));
		document.getElementById("preview").innerHTML = code;
		document.getElementById("notes").innerHTML = "";
		document.getElementById("notes").appendChild(document.createTextNode(notes));
	}

	rerender();
	document.currentScript.parentNode.addEventListener("input", rerender);
</script>

## Other methods

There are, of course, other methods to center that may make more sense depending on your situation.

If you're using a grid layout and want a full-page banner before your content, use some grid properties on the parent

```css
body {
	display: grid;
	grid-auto-rows: 100vh auto;
	margin: 0;
}
```

and then include your banner element.

```css
h1 {
	margin: auto;
	text-align: center;
}
```

For some extra flair, I also like `width: 100%;` with some kind of background filter to make a kind of centered stripe page before the content.

`text-align` isn't necessary if your centered element's width fits the content (`width: fit-content;`), as the margin property will center it horizontally too.

You can also get away with excluding `grid-auto-rows` entirely if your child element is to be dynamically sized, but this can get complicated quickly and the element will forcibly take up minimum height if there are enough other nodes in the grid.

I find this method easier to do than with flexbox, since the root parent decides how tall the first element is, which allows you to minimize redundancies in the DOM. It also has more sane defaults when dealing with more elements in the container; you don't have to use `flex-direction` and *the centered element itself defines the centering*.

A `float: inline-end;` can also come in handy for block-level newspaper-like alignment where you want to throw an image off to the side. This often doesn't do what you want, but it's perfect when it does. I can't use this on my site because margin is defined with flexbox. If this is your situation too, play around with `justify-content`.
