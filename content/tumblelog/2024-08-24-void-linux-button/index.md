+++
title = "A Void Linux 88x31 button"
description = "Inspired by that of classabbyamp"
+++

This comes from <https://placeviolette.net/blog/void-button>, it was my attempt at creating a button in pure SVG to see if it would decrease file size.

<!-- more -->

I technically succeeded at this (infinite, 3K vs. 88x31, 12K) but my attempt to use Sofachrome for all the text makes it effectively unintelligible at its regular 88x31 resolution. I realize now this is why Abby's uses Noto.

Compare mine:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 31" width="88" height="31" style="box-sizing: border-box; background-color: #cecece; color: black; border-width: 2px; border-style: solid; border-color: white black black white;">
	<path d="M72.5 1.5c-2.9 0-5.8.9-8.2 2.6l3.2 3.2a9.6 9.6 0 0 1 13.2 13.2l3.2 3.2A14.04 14.04 0 0 0 72.5 1.5Z" class="light"/>
	<path d="m80.7 26.9-3.2-3.2a9.6 9.6 0 0 1-13.2-13.2l-3.2-3.2a14.04 14.04 0 0 0 19.6 19.6z" class="dark"/>
	<path d="M77 15.5a4.5 4.5 0 0 1-4.5 4.5 4.5 4.5 0 0 1-4.5-4.5 4.5 4.5 0 0 1 4.5-4.5 4.5 4.5 0 0 1 4.5 4.5z" class="light"/>
	<path d="M10 8.1c1 0 1.8-.5 1.8-1.5S11.1 5 10.2 5h-6c-.1 0-.2.1-.2.2v4.4c0 .1.1.2.2.2h2.4c.1 0 .2-.1.2-.2V5.8h1.5c.4 0 .8.2.8.7 0 .5-.3.7-.8.7h-.9c-.1 0-.2.1-.2.2v.4c0 .1.1.2.2.2zm7.9 1.7c1.4 0 2.3-1 2.3-2.4S19.3 5 17.9 5h-3.4c-1.4 0-2.3 1-2.3 2.4 0 1.3.9 2.4 2.3 2.4zm-.6-2.1c0 .9-.3 1.3-.8 1.3h-.9c-.5 0-.8-.3-.8-1.3v-.8c0-.8.2-1.1.8-1.1h.9c.6 0 .8.2.8 1.1zm12.5 2.1c.1 0 .2 0 .3-.1l3.3-4.4v-.1c0-.1 0-.1-.1-.1h-.2c-.2 0-.3 0-.4.1l-2.2 2.7-2-2.8c-.1-.1-.2-.1-.4-.1h-.4c-.2 0-.3 0-.4.1l-2.1 2.7-2.1-2.7c-.1-.1-.2-.1-.4-.1H20c-.1 0-.2 0-.2.1 0 0 0 .1.1.1l3.6 4.4c.1.1.2.1.3.1h.4c.1 0 .2 0 .3-.1l2.4-3 2.2 3c.1.1.2.1.3.1zm10.5-2.2c.1 0 .2 0 .2-.1v-.6c0-.1-.1-.1-.2-.1H37c-.1 0-.2.1-.2.2v.5c0 .1.1.2.2.2zm.1 2.2c.1 0 .2-.1.2-.2v-.5c0-.1-.1-.2-.2-.2h-3.3c-.6 0-.8-.3-.8-1.3v-.8c0-.9.2-1.1.8-1.1h3.2c.1 0 .2-.1.2-.2v-.3c0-.1-.1-.2-.2-.2h-4.9c-1.4 0-2.3 1-2.3 2.4s1 2.4 2.3 2.4zm9.1 0c.1 0 .1-.1.1-.1v-.1l-2-2c.7-.1 1.4-.6 1.4-1.3 0-.7-.6-1.2-1.5-1.2h-6.1c-.1 0-.2.1-.2.2v4.4c0 .1.1.2.2.2h2.4c.1 0 .2-.1.2-.2V5.8h1.6c.4 0 .7.2.7.5s-.2.5-.7.5h-1c-.1 0-.2.1-.2.2v.2c0 .1 0 .2.1.3l2.1 2.2c.1.1.3.2.5.2zm7.2-2.2c.1 0 .2 0 .2-.1v-.6c0-.1-.1-.1-.2-.1h-3.3c-.1 0-.2.1-.2.2v.5c0 .1.1.2.2.2zm.1 2.2c.1 0 .2-.1.2-.2v-.5c0-.1-.1-.2-.2-.2h-3.3c-.6 0-.8-.3-.8-1.3v-.8c0-.9.2-1.1.8-1.1h3.2c.1 0 .2-.1.2-.2v-.3c0-.1-.1-.2-.2-.2h-4.9c-1.4 0-2.3 1-2.3 2.4s1 2.4 2.3 2.4zm6.5 0c1.3 0 2.3-1 2.3-2.4S64.7 5 63.3 5h-5.6c-.1 0-.2.1-.2.2v4.4c0 .1.1.2.2.2zm-.9-2.1c0 .9-.2 1.3-.8 1.3h-1.4V5.8h1.4c.6 0 .8.2.8 1.1zm12.3 2.1c1.2 0 1.7-.7 1.7-1.4s-.4-1.1-.7-1.2c.2-.1.5-.3.5-.9 0-.7-.5-1.2-1.4-1.2h-6c-.1 0-.2.1-.2.2v4.4c0 .1.1.2.2.2zm-1.8-2.2c.5 0 .7.2.7.7 0 .4-.2.7-.7.7h-1.6V5.8h1.8c.5 0 .6.2.6.5s-.1.5-.6.5H72c-.1 0-.2.1-.2.2v.5c0 .1.1.2.2.2zm8.4 2.2c.1 0 .2-.1.2-.2V7.9L84 5.2v-.1c0-.1 0-.1-.1-.1h-.4c-.1 0-.2 0-.3.1l-1.9 2-1.9-2c-.1-.1-.2-.1-.3-.1h-2.8c-.1 0-.1 0-.1.1 0 0 0 .1.1.1l2.5 2.7v1.7c0 .1.1.2.2.2z" aria-label="powered by" class="text"/>
	<path d="M31 14.6c.2-.2.3-.3.3-.4 0-.1-.1-.2-.3-.2h-1.3c-.4 0-.8.1-1.2.4l-11.2 7.7-4-7.7c-.1-.3-.4-.4-.8-.4H4.6c-.4 0-.6.2-.6.4v.2l6.5 12.1c.1.3.3.4.7.4h1.3c.3 0 .6-.1 1-.4zm9.4 12.5c5 0 10-4.5 10-9 0-2.4-1.4-4.1-4.2-4.1h-9.4c-5.1 0-10 4.5-10 9 0 2.4 1.4 4.2 4.1 4.2zm1.2-5.8c-1.2 2.6-2.2 3.5-3.8 3.5h-2.6c-.8 0-1.3-.3-1.3-1 0-.6.2-1.3.7-2.5l.9-2.1c1-2.3 1.9-3 3.4-3h2.6c1 0 1.6.3 1.6 1 0 .5-.2 1.1-.6 2zm14.1 5.8c.3 0 .6-.2.7-.5l5.4-12.1c.1-.1.1-.2.1-.3 0-.2-.1-.3-.4-.3h-6.6c-.3 0-.6.2-.7.5l-5.4 12.1c0 .1-.1.2-.1.3 0 .2.1.2.3.2zm18.3 0c4.9 0 10-4.3 10-9 0-2.4-1.4-4.1-4.1-4.1H64.4c-.3 0-.6.2-.7.5l-5.4 12.1c0 .1-.1.2-.1.3 0 .2.1.2.3.2zm.3-5.8c-1.2 2.6-2.3 3.5-3.8 3.5h-3.9l3.8-8.6h3.9c1 0 1.5.3 1.5 1 0 .4-.2 1.1-.6 2z" aria-label="VOID" class="text"/>
	<style>
		.light, .dark, .text {
			paint-order: stroke;
			stroke-width: 2;
		}
		.light, .dark {
			stroke: black;
		}
		.light {
			fill: #abc2ab;
		}
		.dark {
			fill: #478061;
		}
		.text {
			fill: black;
			stroke: white;
		}
	</style>
</svg>

with Abby's:

[!["Powered by Void"](void-button-anim.gif)](https://placeviolette.net/blog/void-button/void-button-anim.gif)

And mine's not animated. SVG animation sucks; it has to be verbosely defined in DOM. I consider myself famous for my purple looping gradients, but adding an animation that stripes in this way is way too much effort.

I do honestly think that mine is better at a higher resolution, but crispness when zooming in is just about the opposite intent.

It's similarly released into the public domain under [CC0](https://creativecommons.org/public-domain/cc0) because I don't care.
