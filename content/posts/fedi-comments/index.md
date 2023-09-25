---
title: Introducing Fediverse-Comments
date: 2023-09-13
lastmod: 2023-09-13
---

I've started self-hosting all my blog posts to wean myself away from commercial platforms. I wanted to support discussion, but didn't want all the code infrastructure to support them. My blog is a static website. I wanted to keep it simple. But, I did want people reading my blog to feel invited to discuss articles and to see others' discussing them.

What I realized I really wanted was for my blog to *mirror* the discussion about an article that follows my announcement of the article on (non-commercial) social media. 

The solution I threw together is a small JavaScript that copies social media discussions about an article post into the otherwise-static HTML hosting that article.

It looks like this:

{{< fedicomments url="https://mastodon.social/@MildlyAggrievedScientist/111059142506301880" exclude="" include="" >}}

### How it works

I wrote a script [I call fediverse-comments](https://github.com/UppaJung/fediverse-comments) that searches the HTML on a page for a template into which comments should be placed. That template will have the URL of a fediverse status that will serve as the root post from which comments will be loaded.

I compile my personal website with [Hugo](https://gohugo.io/) (and the [PaperMod](https://adityatelange.github.io/hugo-PaperMod/) theme), so I added a Hugo shortcode (a macro) that allows me to import a comment feed.  The code is [here](https://github.com/UppaJung/personal-website/blob/main/layouts/shortcodes/fedicomments.html).

So, if you look in the [code](https://github.com/UppaJung/personal-website/blob/main/content/posts/fedi-comments/index.md) for this blog post you are reading, you'll see a single line that includes the comment stream. So, when I post, I first make the article available online, then I post to Mastodon, then I immediately update the article to link to any replies to the Mastodon post.

```
{{ < fedicomments url="https://mastodon.social/@MildlyAggrievedScientist/111059142506301880" exclude="" >}}
```

If there's a post I want to block, I can block it by adding it's status ID to a comma separated list in the `exclude=""` tag.

If you like this approach, I've made the code code under the highly-permissive MIT license. The script is very small and easy to extend.
