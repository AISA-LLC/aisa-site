# How to Publish a New Article — AISA

Your site now has an **Articles hub**. Publishing a new article is two steps.
No coding. About 5 minutes.

---

## The files involved

- `articles.html` .............. the hub (the list people land on)
- `_article-template.html` ..... your blank template (copy this each time)
- `article.css` ................ article styling (never needs editing)
- `article-*.html` ............. each published article

---

## STEP 1 — Make the article page

1. **Copy** `_article-template.html` and rename it, e.g.
   `article-my-new-topic.html`
   (use lowercase, dashes, no spaces).

2. **Open it** in any text editor. Fill in the spots marked
   `<!-- ===== EDIT (n): ... ===== -->`. There are 8:
   1. Browser tab title
   2. One-sentence description
   3. Canonical URL — change the filename to match your file
   4. Social preview title + description
   5. Eyebrow category (e.g. "Industrial AI")
   6. Headline
   7. Deck / subhead + the date
   8. **The article body**

3. In the body, write plain paragraphs. The only pieces you need:
   - `<p>your text</p>` — a normal paragraph
   - `<p class="lede">your text</p>` — the larger opening paragraph
   - `<h2>a heading</h2>` — a section heading
   - `<div class="pull"><p>a standout line</p></div>` — orange pull-quote
   - `<strong>bold</strong>` and `<em>italic</em>`
   - Trademark: type `FaultAssist&trade;` to get FaultAssist™

   Tip: curly quotes use `&ldquo;` `&rdquo;` (double) and `&rsquo;` (apostrophe);
   an em dash is `&mdash;`. Straight quotes are fine too if you'd rather not bother.

4. Save.

---

## STEP 2 — Add it to the hub

1. Open `articles.html`.
2. Find the comment that says **"TO ADD A NEW ARTICLE."**
3. **Copy one whole `<a class="article-card"> ... </a>` block**, paste it
   directly **below that comment** (so it sits at the TOP of the list —
   newest first).
4. Change the four fields in your new block:
   - `href="..."` — your new filename
   - the date
   - the `<h2>` title
   - the `<p>` teaser (1–2 sentences)
5. Save.

---

## STEP 3 — Deploy

Upload the changed files to Cloudflare Pages (drag the whole folder into
your Pages project, or push to your connected Git repo). You need:
- your new `article-*.html`
- the updated `articles.html`
- (first time only) `article.css`

---

## Posting to LinkedIn

Instead of pasting the article into LinkedIn's editor, post a short teaser
and link to the page on your site, e.g.:

  https://aisa.aflegacygroup.com/article-my-new-topic.html

Put the link in the FIRST COMMENT (LinkedIn suppresses reach on links in
the post body). LinkedIn will show a preview card using the title and
description you set in EDIT (4).

---

## Quick reference — the body pieces

    <p class="lede">Opening paragraph, slightly larger.</p>

    <p>A normal paragraph.</p>

    <h2>A section heading</h2>

    <p>Text with <strong>bold</strong> and <em>italic</em> and
    <strong>FaultAssist&trade;</strong>.</p>

    <div class="pull"><p>A line worth pulling out.</p></div>

That's everything. The header, footer, fonts, colors, and mobile layout
are all handled for you by styles.css + article.css.
