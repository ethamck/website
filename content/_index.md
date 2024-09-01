+++
title = "ethamck nexus!"
description = "My personal website with information about myself, my writings, shrines built from scratch, a few fun pages, and outlinks to other like-minded sites."
+++

<aside>

If you have epilepsy or are sensitive to flashing lights, you may want change the theme to "Monochrome" to reduce animations and moving gradients. The same theme also accomodates for colorblindness and increases contrast. The first link in the tab order is unnamed but will skip to the main content body.

</aside>

I'm ethamck, a [diarist](https://logseq.com)[^1] and computer enthusiast.

Because I journal every day, my writings here may be seldom recent due to the fatigue that comes with it. It's a good thing, it just means more content for me and less for you.

I got my start in programming with [QBasic](https://wikipedia.org/wiki/QB64) and after that HTML, though this was just an exercise in what I could do with computers and my code was abhorrent. I learned how to do some basic [image manipulation](https://gimp.org) at the time too, but my edits were of a similar quality.

Eventually I took upon playing around in [Roblox with Luau](https://create.roblox.com/docs/luau); I occasionally go back to it whenever they introduce new crazy features that make developing on their platform not wholly unreasonable if it weren't for the fact that they're [basically robbing you](https://help.roblox.com/hc/articles/13061189551124). Lua is a neat language, but I use [Kakoune](https://kakoune.org), so its only other modern use, making Neovim plugins, isn't applicable to me.

Right now I plan on becoming a wizard in [Go](https://go.dev), but if I've found anything out before it's that the language isn't the thing between you and a new program. It's your willpower.

I use [Void Linux](https://voidlinux.org) on a [Framework Laptop 13](https://frame.work), driving three displays with [Sway](https://swaywm.org) at my desk. It's LVM under full disk encryption with separate root/home partitions. I don't distrohop ever anymore, but I wish I used this scheme when I did. Unencrypted EFI partition means that I could've dualbooted [Pop!_OS](https://pop.system76.com), the only other desktop distro with a reason to exist. My [Pixel 8a](https://wikipedia.org/wiki/Pixel_8a) runs [Graphene](https://grapheneos.org).

<aside>

No background music? I deem ["Torchlight"](https://farside.link/invidious/watch?v=TBjlY0HjrTE&listen=1) as this website's vibe. Or ["Fred Astaire"](https://farside.link/invidious/watch?v=OKoJcWwx3O4&listen=1) if you're feeling less of a vibe and more of a swank.

</aside>

This site has minimal JavaScript. The [theme code](theme.js) is one small file, and a few pages (like this one) have some other fun scripting (the title text marquee). Some themes may be resource-intensive.

[^1]: Logseq is the only product I'd emphatically recommend to pretty much everyone. It's by no means perfect, and it's an Electron app, but it gets the job done and lets you customize it as you see fit.

<script>
	let title = document.title;
	let i = title.length;
	let increment = -1;

	setInterval(() => {
		document.title = title.substring(0, i);
		i += increment;
		if (i === 1 || i === title.length) increment *= -1;
	}, 100);
</script>

## Resources
