+++
title = "What is my logo?"
description = "The inspiration and path taken to get to the logo I have now."
[taxonomies]
tags = ["design"]
+++

The first piece in the graphic is the glyph.

The base of this is three lines, the first two extending from the corners to the center at a 90° angle, and the final one bisecting that angle in the other direction.

<!-- more -->

This comes from a clock. I was bored one day, and saw the hands pointing like this at around 7:50:15. They obviously weren't perfect, but I liked the shape and mindlessly doodled it along with some (imperfect) continuations of each line.

I felt like it needed something to take away attention from the inequal distances between each line and its continuation segment, and a curve seemed to occupy the space the best.

The now finalized square glyph to me looked quite a bit like a cursive "E", so I tried to write the rest of this prototype "ethamck" name off of it.

I used Inkscape to connect first Cantarell to the rest of it, but this was done amateurishly. GIMP's default "Purples" gradient was used as a background for the glyph whenever it was used as a profile icon.

Some time afterwards, I was reinstalling my OS to remove clutter, and ended up misplacing the original SVG file along with my entire website, made with Eleventy[^1].

I was due for a while to replace the logo, but only did it when I began working on this reproduction of the original site. It's a fairly good reproduction.

This time I created the glyph close to raw with SVG, and used Noto instead of Cantarell, though to make the path dimensionless (unfillable) I ended up only taking half of each letter's path because Inkscape doesn't have a very good tracing function.

After manually kerning the text a little bit more, merging some paths, and getting rid of the original cross for the "t", I had a workable logo that was free of clutter. The glyph is done in 104 bytes of path code.

The most recent change I made after trying to adopt it was moving the line continuations so that the distance between their respective line is more pleasing. I still didn't use trigonometry, mostly because I want to keep the distances as powers of two.

[^1]: I love Eleventy, but Zola is packaged native on Void ([I wonder why](https://placeviolette.net/blog/zola)), and it's significantly cleaner. The templating engine leaves some to be desired, mostly in streamlining, but then again, don't all of them?
