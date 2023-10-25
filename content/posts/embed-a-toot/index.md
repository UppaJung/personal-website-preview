---
title: Introducing Embed-a-Toot
date: 2023-10-25
lastmod: 2023-10-25
---

Mastodon's current option for embedding posts ("toots") on other websites is inefficient, inflexible, and insecure.[^big-tech] It embeds posts via an `iframe` element which loads over a megabyte of content and scripts from the Mastodon server. That iframe gives those scripts full control over your webpage.[^iframe-security] You, the embedder, get no control over how the content is rendered on your page. Important content can be cropped out of view, as journalists have complained when trying to embed toots.

<!-- <iframe src="https://infosec.exchange/@dangoodin/111177516443427906/embed" width="400" allowfullscreen="allowfullscreen" sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"></iframe> -->

<link rel="stylesheet" href="./boxed.css">
<article class="fediverse-status" data-mastodon-host="infosec.exchange" data-status="111177516443427906" data-created-by="https://github.com/UppaJung/embed-a-toot;v1.0.0;2023-10-25T14:22:09.651Z" data-update-counters data-update-content>
	<header>
		<a href="https://infosec.exchange/@dangoodin" rel="external nofollow" title="view profile at @dangoodin@infosec.exchange" class="authors-avatar-link">
			<picture class="authors-avatar">
				<source srcset="https://media.infosec.exchange/infosec.exchange/accounts/avatars/109/390/159/086/385/467/original/eb30f824636e2250.jpg" media="(prefers-reduced-motion: no-preference)"/>
				<img src="https://media.infosec.exchange/infosec.exchange/accounts/avatars/109/390/159/086/385/467/original/eb30f824636e2250.jpg" alt="@dangoodin@infosec.exchange avatar" class="authors-avatar"/>
			</picture>
		</a>
		<div class="post-author">
			<span class="post-authors-display-name">Dan Goodin</span>
				<a href="https://infosec.exchange/@dangoodin" title="@dangoodin@infosec.exchange" rel="external nofollow" class="post-authors-fediverse-identity">
					<span class="at-symbol username-at-symbol">@</span>
					<span class="post-authors-fediverse-username">dangoodin</span>
					<span class="at-symbol server-at-symbol">@</span><span class="post-authors-fediverse-server">infosec.exchange</span>
				</a>
		</div>
	</header>
	<main><p>Is there any way to modify how embedded toots look? When I embed toots in my Ars posts, there are only a few lines. I'd love for them to include more. Also, the scroll bar on the right is almost invisible.</p><p>I prefer to embed instead of posting a screenshot, so please don't suggest that.</p></main>
	<img alt="Ars%20Technica%20article%20showing%20an%20embedded%20toot." src="https://media.infosec.exchange/infosec.exchange/media_attachments/files/111/177/514/232/950/770/original/fac3c23b8d51ee99.jpg" class="fediverse-attachment">
	<footer>
		<time datetime="2023-10-04T15:44:31.902Z" class="post-time">Oct 4, 2023, 11:44 AM</time>
		<time hidden datetime="" class="edit-time">edited at </time>
		<a href="https://infosec.exchange/@dangoodin/111177516443427906/favourites" title="favourites" class="counter-favourites">20</a>
		<a href="https://infosec.exchange/@dangoodin/111177516443427906/reblogs" title="reblogs" class="counter-reblogs">10</a>
		<a href="https://infosec.exchange/@dangoodin/111177516443427906" title="replies" class="counter-replies">5</a>
	</footer>
</article>

Fortunately, Mastodon's API empowers third-party developers to create better options.

I've used that API to create [Embed-a-Toot](https://uppajung.github.io/embed-a-toot/), which gives you full control over the appearance and behavior of Mastodon posts you embed on your site.

Embed-a-Toot transforms posts into plain-old HTML for embedding, which your browser can render even when the Mastodon server that hosted that content is inaccessible and even if the browser has JavaScript turned off.[^media-linked]

That embeddable HTML content captures the text of the post, including counters (of favorites, reblogs, and replies) at one point in time. Some who embed a post may want to update the posts' content if the posts' author edits it, or update the counters as the post gains traction. Others may want to ensure readers see what they saw at the time they embedded the content. Embed-a-toot allows you to opt to update the content, counters, both, or neither.

To update embedded posts on a page you will need to include a script onto that page. The script runs on the browser of those reading your page, querying the server hosting the post via the Mastodon API, then updating the content directly onto the page in the reader's browser. The script is 3kb, so the network overhead of this embedding approach remains a fraction of a percent of embedding with Mastodon's `iframe`. The increased efficiency means your readers see the content faster and the Mastodon server hosting the post needs only serve a tiny fraction of the traffic it would need if you had used an iframe. The script is simple, open source, so you can audit it, or modify and recompile it.

Embed-a-Toot offers default style sheets that I hope many will find sufficient, but I encourage others to modify them or to submit pull requests with more professionally-designed styles.[^styles-inspired]

Lastly, Embed-a-Toot tries to be courteous in its use of the Mastodon API. If the operator of a Mastodon server is wondering why your page is generating traffic to their server, we make it easy for them to find out. All requests include headers that indicate the request came from Embed-a-Toot:

```
Request-Module: https://github.com/UppaJung/embed-a-toot v1.0.0
Request-Purpose: update rendered post on the referring page
```

Please try out [Embed-a-Toot](https://uppajung.github.io/embed-a-toot/).

Please submit issues, PRs, and new styles via [GitHub](https://github.com/UppaJung/embed-a-toot/).

[^iframe-security]: The `iframe` settings allow scripts to run in your hosting page's origin, to take over the full screen, and to allow popups. The embed sets the iframe's `allowfullscreen` attribute and the iframe sandbox attribute's `allow-scripts`, `allow-same-origin`, `allow-popups`, `allow-popups-to-escape-sandbox`, and `allow-forms` settings.

[^big-tech]: If you embed social media content from big tech you will be running a script that allows the provider to track your users.

[^media-linked]: images and videos are still linked to the server that hosts the post.
If the post has embedded media, you could download and host it locally as copyright law allows, simply updating the links in the HTML generated by the embedding code.

[^styles-inspired]: The primary style was inspired by [Stefan Bohacek](https://mastodon.social/@stefan@stefanbohacek.online)'s similar [project](https://github.com/stefanbohacek/fediverse-embeds-wordpress-plugin) to improve Mastodon embedding with WordPress.