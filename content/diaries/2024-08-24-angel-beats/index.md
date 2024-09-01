+++
title = "Angel Beats! YouTube OP Reupload"
description = "A YouTube video with a comments section in which many people sporadically microblog."
+++

See [the previous page](@/diaries/_index.md) for some more information on what this page refers to.

<!-- more -->

Download the entire comment database with

```sh
yt-dlp --skip-download --write-comments --dump-json zIFV8UUs1-c | jq -Mcr '[.comments.[] | {"id": .id, "parent": .parent, "text": .text, "author": .author, "author_id": .author_id, "timestamp": .timestamp}]'
```

For safety, run `jq` after `yt-dlp` has written the file to disk by omitting the pipe and `--dump-json`.

Piping through `jq` keeps only comments and their content, omitting useless properties like author thumbnail URL and like count. Over the 40 thousand comments to be archived, this ends up more than halving the file size, even with gzip.

The file is then put into `tar` to create incrementals with

```sh
tar -zcf date.tgz -g snapshot.snar info.json
```

You must rename the output JSON file to `info.json`. `date` should be `yyyymmdd`. Do not rename `snapshot.snar`.

You may need to pass `--no-check-device` to `tar`.

[`snapshot.snar` (you need this for creation only)](snapshot.snar)

To update to a given position, you first need to download a level 0 backup and then all files leading up to and including the date you intend to update to. From there you just have to extract every single tar file in order with

```sh
tar -x date.tgz info.json --listed-incremental=/dev/null
```

I recommend scripting this if it takes little time.

## 2024

[August 24](20240824.tgz) (4.6M, level 0)
