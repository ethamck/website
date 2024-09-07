+++
updated = "2024-09-07"
title = "The Virtues of Good Web Design"
description = "A few points to follow when making a quaint website and advice on how to better satisfy users."
[taxonomies]
tags = ["design", "web"]
+++

> It seems that perfection is attained not when there is nothing more to add, but when there is nothing more to remove.

--- Antoine de Saint Exupéry, <cite>Terre des Hommes</cite> (1939) ([English variant translation](https://en.wikiquote.org/wiki/Antoine_de_Saint_Exup%C3%A9ry#Terre_des_Hommes_(1939)))

Yes, I did just quote this at you. You've probably heard it before. That's because it sounds poetic. But it's also true.

<!-- more -->

Your page should be small both in data and style. That's probably the summary of the entire postmodern indie web movement.

And maybe the summary of this entire article. But just this quote probably won't affect your decision-making as much as the rest of what I have to say.

See also: [The Website Obesity Crisis](https://idlewords.com/talks/website_obesity.htm), [Illustrative notes for obsessing over publishing aesthetics § Screenshots](https://jeffhuang.com/illustrative-notes-for-publishing-aesthetics#screenshots)

## Don't include anything the user doesn't want to see.

If it takes attention away from your article, remove it.

Ads can go above or below, but never on the same rows as your main content. If your vertical ad off to the side is blinking in and out of loading or switching between images, it takes away from your writing. If an ad loads in between paragraphs, the user has to manually look around it, and almost even worse, if it's a large enough payload, now there's a huge gap of blank space between paragraphs. Even [Google recommends this](https://developers.google.com/search/docs/appearance/avoid-intrusive-interstitials).

The same goes for anything else inline, even if it's meant to go with your design. Don't embed a mailing list prompt.[^1]

And a navigation bar, in any place, can also take away from your content:

- Multiple rows of links are difficult to parse, especially on mobile devices where you have an address bar, then a few links, then a header, then a sticky navbar.

- With dropdowns or broad categories, it gets harder to find what the user is looking for.

- Hamburger menus are just a [bodge](https://farside.link/invidious/watch?v=lIFE7h3m40U) ([<samp>lIFE7h3m40U</samp>](https://youtube.com/embed/lIFE7h3m40U)) that fails at hiding your design problems.
	- That said, at least trying to hide your useless links makes more sense than only including a random few. If you have no other way to get rid of your cruft, a menu does hide it well.

Consider [Google's homepage](https://google.com). How many buttons have you ever used there? For me, it's 10 out of 15 buttons (including "Search" and "I'm Feeling Lucky" buttons). 33% button utility. This is a relatively good score for the modern web, and has no folders hiding any destinations. You *should* be aiming for a passing grade. Don't dare go under 10%.

You don't need a hero image. It's big, unneccessary, and forces the user to scroll an entire page just to get to the one they expected to arrive at when they clicked the link. If uncompressed, it could possibly cost the user real money for no reason. Might I recommend illustratively [replacing them with William Howard Taft](https://web.archive.org/web/20231107104727/https://tafttest.com/)?

Washing crap from before the article also means you don't need to worry about a hidden-but-tabbable "skip to content" button, because it doesn't skip anything.

## Keep your design fluid.

It's not physically possible to create markup that spans more than one column. Luckily, one column is exactly how many you need.

Create your markup for, in order,

1. Screen readers
1. Terminals
1. Paper
1. Mobile
1. Desktop

This is sorted by amount of raster width that each medium has. Your markup needs to be readable at a raw text level, then at a one-column design, and finally at your initial thoughts for the site as it appears on screens with larger width (or aspect ratio greater than 3:2).

Essentially, your design *has* to look good with just semantic HTML. Accessibility is a cakewalk after that. Minimize the use of `<div>` and `<span>`. If you need inspiration, there's always viewing source.[^2]

<button onclick="document.getElementById('logo').remove(); [...document.getElementsByTagName('link')].forEach(x => {const rel = x.getAttribute('rel'); !!rel && rel.toLowerCase() === 'stylesheet' && x.remove();}); document.head.appendChild(Object.assign(document.createElement('link'), {rel: 'stylesheet', href: 'fuckingstyle.css'}));;">Remove the site's CSS</button>[^3] (you'll have to refresh to get back)

[A Field Guide to Web Accessibility](https://theultimatemotherfuckingwebsite.com) is a great resource for ensuring that you know *how* to design your website correctly once you've made your markup spick-and-span.

[Logical properties](https://web.dev/learn/css/logical-properties) are also paramount to ensuring that your design works in the backwards direction. I'll admit that for websites that intend only to write horizontal text, accounting for a vertical layout is a bit much. My logo, for example, would require far more effort to make work vertically, so I don't, because I won't.

## You don't need the bells or the whistles.

Exclude from your website, if you can:

### Share buttons

If I want to share the article, I'll copy your URL, so don't pollute it.

The most egregious case of this is when multiple occurances of a share button exist for the same website. A custom-made form is fine, just have it [open the phone's share dialog](https://w3.org/TR/web-share) or expand to show that the URL was copied if that's not supported.

### Search

Provide a page where I can <kbd>Control + F</kbd> or leave it to the search engines. Users don't trust your search, because it's useless trash.

### Mailing lists

Use RSS or put it somewhere hidden.

### Polyfills

Don't support useless browsers.

You aren't cool enough to get Windows 8.0 IE10 traffic.

IE makes up oh, just about 0.1% of all traffic, and versions under 11 are half of that.[^4] I'd wager almost all of that IE traffic isn't by humans---it's almost impossible for a layman to keep using IE today. It hasn't been touched in 7 years. [Even Microsoft has thought it too futile to support on their own websites for the past three years](https://techcommunity.microsoft.com/t5/microsoft-365-blog/microsoft-365-apps-say-farewell-to-internet-explorer-11-and/ba-p/1591666).

[Safari is basically force-updated by Apple](https://analytics.wikimedia.org/dashboards/browsers/#all-sites-by-browser/browser-family-and-major-hierarchical-view). It has near the least version disparity. If you're on Safari, chances are you already have the latest tech the browser has. You can assume that 99% of your mobile Safari users are on a higher version than the current one minus four.

Firefox is anecdotally at the forefront of adopting new things. Historically (and for me, still) it's the developer browser that you can test new standards with. Though there are some compatibility issues in some places, it almost never will break your site.

And finally, Chrome. It has a similarly small version disparity on mobile, and on desktop, it's worse, but still not that bad I don't believe anyone in the past five years has had to ask, "does this support Chrome?" as it's mostly an amalgamation of additions to WebKit.

Nicholas C. Zakas has some [further reading about user agents](https://humanwhocodes.com/blog/2010/01/12/history-of-the-user-agent-string) if you're interested in the history of these rendering engines. [As does Aaron Andersen](https://webaim.org/blog/user-agent-string-history) if you're comfortable with a bible parody.

## Don't hotlink or embed.

Cite your quotes and link to the source. You'll save users additional traffic, and someday the link will break. Using a blockquote, just assign `cite` and make the next paragraph an attribution:

```html
<blockquote cite="https://html.spec.whatwg.org">
	Content inside a blockquote must be quoted from another source, whose address, if it has one, may be cited in the cite attribute.
</blockquote>
<p>— the <a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element">HTML Standard</a></p>
```

Redundant? Yes. So is the other half your HTML. These links, even if identical, will never update. That's the point.

Actually, this also allows you to utilize sources you've linked before and is much more flexible. You can word the citation any way you'd like, and I do this all the time. You don't need an em dash just because everyone else does it. You could use cool phrases like "as written by John Doe at BBC" and link to "as written" and to John Doe.

All of your content should be written assuming that your links are all dead and search engines don't exist. If your writing makes less sense with these criteria, reword it.

## Write anchors correctly.

Lighthouse has this baked in. Don't ever use a blue "here" or "go"[^5] on your website. It drags away attention from the most important part of your sentence and just isn't what the element is for.

They don't, however, have to be exactly the name of the source. Any time that you write a link, the context is still kept, so you can use a link as a citation as to why you're writing the sentence.

## Be conservative on the gosh darn footnotes.

[^1]: If you *must* do this given certain design constraints, fine. A modal dialog is *much* worse.
[^2]: I can't change the `<div>`s and `<span>`s generated by code blocks and tables of contents, for example. Since their containers don't have any information aside from visual presentation with color, I consider that fine. Wish I could've made this link to `view-source:.` but that's [disallowed by most browsers](https://chromium.googlesource.com/chromium/src/+/ce6b6603637ee045041ccb49359fbae617d84ba5).
[^3]: Also imports [https://<wbr/>perfectmotherfuckingwebsite.com<wbr/>/fuckingstyle.css](fuckingstyle.css) and removes the logo SVG as it's styled with site-wide CSS. So not completely <button onclick="[...document.getElementsByTagName('link')].forEach(x => {const rel = x.getAttribute('rel'); !!rel && rel.toLowerCase() === 'stylesheet' && x.remove();});">zero styling</button>.
[^4]: These stats are from [Wikimedia's analytics](https://analytics.wikimedia.org/dashboards/browsers/#all-sites-by-browser) where IE is listed as 0.3% of traffic. My 0.1 figure is from extrapolation based on other data, citation needed.
[^5]: Although whenever you refer to [the Go language](https://go.dev) tersely it will get this wrong.

This article was partially based on [Juff Huang's <cite>Designed to Last</cite>](https://jeffhuang.com/designed_to_last), which is more focused on archival friendliness than it is with elegant design. It's a good read, too.
