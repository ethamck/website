+++
title = "My take on Tabs vs. Spaces"
description = "TL;DR: tabs."
[taxonomies]
tags = ["programming"]
+++

The argument in favor of spaces is mostly that your code stays consistent across viewers, which means you can

- align without breaking and
- force a consistent character-per-line limit to prevent superfluous nesting.

Sure, but: **you should never be aligning**.[^1]

<!-- more -->

Take [an example](https://dorigo.co/2022/06/tabs-spaces/) of where you may want to align in CSS:

```css
.page {
	grid-template-areas: "header  header "
	                     "content sidebar"
	                     "footer  footer ";
}
```

The real, correct, answer here: **don't align anything**. Just indent it.

```css
.page {
	grid-template-areas: \
		"header header"
		"content sidebar"
		"footer footer";
}
```

Or better yet, keep it on a single line. It's short enough.

```css
.page {
	grid-template-areas: "header header" "content sidebar" "footer footer";
}
```

Aligning requires the programmer to manually mash the spacebar both during initial codewriting and again later when it's changed. Minify your code and prettify it back, and your precious alignment is now gone. But the indentation isn't.

Oh, and the version without spaces is, uncompressed, 40 bytes (30%) smaller. That's using tabs as indentation, too, so *excluding* the fact that each tab = 4 spaces.

Here's [another example](https://dmitryfrank.com/articles/indent_with_tabs_align_with_spaces) in C.

```c
void my_func(void)
{
   int var1          = 1;
   int another_var   = 2;
   int third_var     = 3;
 
   if (  something
      && something_else
      && maybe_something_else
      )
   {
      call_function( long_param[ long_subscript ],
                     another_param );
   }
}
```

Oh, sorry, that's putrid, let me make this readable quick...

```c,linenos,hl_lines=7-9
void my_func(void)
{
	int var1 = 1;
	int another_var = 2;
	int third_var = 3;

	if (something && something_else && maybe_something_else) {
		call_function(long_param[long_subscript], another_param);
	}
}
```

Bing! No alignment necessary.

I can't imagine ever preferring alignment, even when it works. There's no reason why my eyes should interpret `int var1` first as undeclared, then after scanning further right notice that it is in fact being declared, and that I'll have to manually tabulate every single other variable down this sequence. It's nauseating.

If that's wrapping and you'd prefer to make it more verbose, throw in some tabs:

```c,linenos,linenostart=7
if (
	something &&
	something_else &&
	maybe_something_else
) {
	call_function(
		long_param[long_subscript],
		another_param
	);
}
```

Now I'll admit that I think this looks worse. To me, it's an obvious warning sign, exactly like column wrapping requirements, because if your two-line `if` statement requires more than one indented/aligned expression to make it tolerable, you're probably writing unreadable code.

With that said, it's also a matter of personal preference of where to put the `&&`s---their own line? Right after? I'd prefer them on their own line, but since you can't have a symmetrical "trailing `&&`", it makes more sense to have them succeed each expression.[^2]

And tabs have the added benefit of allowing the programmer to choose their preference for tab length, or even change it per-window if you're multiplexing. If they aren't misused, there really aren't any downsides. I like a 6 tab-stop wherever possible and shrink to 3 if the window is too small. I'd wager you didn't even notice, but that's exactly what this page does. Can your spaces do that?

Change the site-wide tab stop to <button onclick="document.documentElement.style.tabSize = 3;">3</button>, <button onclick="document.documentElement.style.tabSize = 4;">4</button>, <button onclick="document.documentElement.style.tabSize = 6;">6</button>, or <button onclick="document.documentElement.style.tabSize = 8;">8</button>. Using these buttons will not persist changes.

[^1]: Excluding Lisp.

[^2]: The same can be said about the placement of the parenthesis, but I disregard that because it makes it impossible to differentiate between condition and body. Languages with trailing function-call commas are on another level.
