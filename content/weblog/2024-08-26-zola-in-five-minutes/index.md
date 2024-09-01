+++
title = "Zola in Five Minutes"
description = "A breakdown of Zola's philosophy and how I use it without themes."
[taxonomies]
tags = ["web"]
+++

While described as a kind of "batteries included" <dfn><abbr title="Static site generator">SSG</abbr></dfn>, I don't think this is the case. [Zola](https://getzola.org), in my experience, has proven to be just another SSG that has opinions on defaults.

<!-- more -->

It doesn't help that the generator seems to be for those who don't design for the web, and would prefer to write in Markdown with a preconfigured theme.

Its documentation separates content and templating, which is nice theoretically, but also just leads to separation of a lot of related (or exactly the same) content.

I come from [Eleventy](https://11ty.dev), a JavaScript SSG that allows you to write all its functionality in one JavaScript file, so when I was shopping for a new generator, the main criteria was

- from scratch
- not theme-focused

and Zola, in a way, fails at both.

Reading the [directory structure page](https://getzola.org/documentation/getting-started/directory-structure) at first glance with these criteria would turn one off, and it certainly did for me, but after parsing through the way the entire thing comes together, it makes a lot more sense.

To begin with, `themes`, `static`, and `sass` are in practice optional.

For me, the directory structure looks more like (abridged)

- `config.toml`
- `content/`
	- `_index.md`
	- `weblog/`
		- `2024-08-26-zola-in-five-minutes.md`
- `sass/`
	- `style.scss`
	- `_layout.scss`
	- `_theme.scss`
	- `_content.scss`
- `static/`
	- `favicon.svg`
	- `theme.js`
- `templates/`
	- `404.html`
	- `index.html`
	- `page.html`
	- `section.html`

Sass compilation is optional, so if you prefer to write pure CSS it would just go in `static/` (which is how Sass is compiled in the first place).

Templates, however, are not.

One thing that forces you to adopt the Zola way, though, is that **content can't have templating** (aside from a dedicated `templates/shortcodes/` directory, which is more advanced and not how to do single-page templating).

Strangely, this is a good thing. Your content *has* to extend from a layout. Zola won't serve an HTML file as a "page", but it will if it considers it a static asset to a post. This complicated [my shrine page](@/shrine/_index.md), since every single shrine there is written in raw HTML. They can't be served *by* Zola, but they can be linked to with a `.html` extension.

I think it would benefit Zola greatly if the distinction between the root page, different sections, and pages were removed.

My first attempt at building this site led to extreme annoyance with the fact that the root page couldn't be written in Markdown as a "page". What I failed to understand then is that it *is*, as long as you eliminate the distinction in your mind.

"Pages" are named either `yyyy-mm-dd-slug.md` or `index.md` in a folder with that name sans `.md`. "Sections" are named only `_index.md` and inherit the name from the directory.

Assets for each post or section can be colocated, so `static/` is mainly just for global sitewide assets. Everything there is copied to `/`.

The default templates also go in `templates/`. Section's default is `section.html` and page's default is `page.html`.

But. The root document `content/_index.md` *must be a section*, and its default is `index.html`, **not** `section.html`.

A 404 page's default is `404.html`, and a few global configuration options in `config.toml` will enable or disable automatic generation of things like `sitemap.xml`, `rss.xml`, `atom.xml`, and `robots.txt`. Each of these files has a default template that you can override, but if you do, you have to write the entire thing from scratch.

Coming from Eleventy, my default automatic template was `html.html` which would create an HTML document that every page would have by default using variables like `{{ title }}`.

<aside>

Note that pages and sections, while they share some of the same variables, store them in different namespaces. Instead of writing `{{ title }}`, you must write either `section.title` or `page.title` or `config.title`!

</aside>

This can be done, counter-intuitively, by using `index.html`, which in some configurations often inherit from `section.html`, as this page.

The way that Zola does templating, with [Tera](https://keats.github.io/tera/docs), is fundamentally different from the way I was used to.

A template file consists of content that is overridden by blocks.

If we write

```html
<!doctype html>
<main>
	{% block content %}No content!{% endblock %}
</main>
```

in `index.html`, any other file with

```html,linenos
{% extends "index.html" %}
```

in the template directory will copy the same content.

We can then add

```html,linenos,linenostart=3
{% block content %}
	This is a section.

	{{ section.content | safe }}
{% endblock %}
```

to `template.html`.

<aside>

The general format of Tera is that `{% %}` statements are for running code, while `{{ }}` expressions are for copying the variable to the final rendering of the page.

All `{% %}`s have an inner content.

Either can use <dfn>filters</dfn> on variables, one of which we see here (`| safe`) to allow the variable to render raw HTML instead of escape characters.

Use `{# #}` for comments.

</aside>

The final compilation of this, with

```md
+++
+++

# Welcome!

Hello, world!
```

in `content/blog/_index.md`, is a document at `/blog/` that finally reads

```html
<!doctype html>
<main>
	This is a section.

	<h1>Welcome!</h1>
<p>Hello, world!</p>
</main>
```

<aside>

The indentation is malformed because there isn't any in the content file.

Appending a `-` to either side of a Tera line, `{%- -%}` or `{{- -}}`, will strip all whitespace in that direction.

</aside>

[There's another way to do this](https://keats.github.io/tera/docs#include), without direct inheritance, but using it is mutually exclusive with `{% extends %}` and I find it less elegant. For me, it needlessly increases verbosity.

I write my `index.html` with all the boilerplate layout information that every page needs to have, then for sections implement a custom listing that changes based on how deep the post is in the year.

Zola does, I forfeit, have many niceties that have let me create a truly static page where others would resort to client-side JavaScript.

With that said, these are more or less [buried in the documentation](https://getzola.org/documentation/templates/pages-sections), and even in that page, it's all just explained with code comments. The same goes for implementing taxonomies, probably the best way I've seen to implement post tagging, which is also terribly onboarded.

A taxonomy is basically a collection of collections, so on a page's front matter you might have

```toml
[taxonomies]
tags = ["web", "design"]
```

The documentation on this (of which there are two pages, [one to half-explain it](https://getzola.org/documentation/content/taxonomies) and [another for information on templating it](https://getzola.org/documentation/templates/taxonomies)) likes an example of a section with movies which would use

```toml
title = "Titanic"

[taxonomies]
directors = ["James Cameron"]
actors = ["Leonardo DiCaprio", "Kate Winslet"]
releases = [1997]
```

A table of contents with anchoring and footnotes are built-in, and that's pretty awesome.

Getting code blocks to look nice was a hassle, though. By default, [colors are inline-styled](https://getzola.org/documentation/content/syntax-highlighting#inline-vs-classed-highlighting), which means that it can't dynamically change theme.

You can make this CSS with `highlight_theme = "css"` in `config.toml`, but I'd only recommend this after you've generated CSS for a theme, so you have a starting place.

For me, I wanted to use Visual Studio Code's theme as a kind of compromise, and make it work with both light and dark schemes, so I had to

-
	download [the light theme `tmTheme` file](visual-studio-light.tmTheme) because [only the dark scheme is built in](https://getzola.org/documentation/getting-started/configuration#syntax-highlighting) and put it in `highlight_themes/visual-studio-light.tmTheme`

-
	temporarily put

	```toml
	highlight_themes_css = [
		{theme = "visual-studio-light", filename = "light.css"},
		{theme = "visual-studio-dark", filename = "dark.css"},
	]
	```

	in the config

-
	copy the generated CSS files from `static`, clean them up, and merge them using [`light-dark()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark).


[^1]: We'll just say that I moved away from Eleventy because JavaScript package management is [crapdosis](https://youtube.com/watch?v=QBK3QpQVnaw&t=557).

<style>
main > article > header > small::after {
	content: ", fuck you.";
}
</style>
