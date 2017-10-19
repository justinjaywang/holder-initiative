---
title: Style Guide
permalink: '/style/'
---

This style guide provides an overview of the Eric H. Holder Initiative brand and website. The majority of styles, such as responsiveness, hover states, and animations, can be found by simply inspecting this website in the browser, or by viewing the [source code](https://github.com/justinjaywang/holder-initiative).

#### Contents

- [Colors](#colors)
- [Typography](#typography)
- [Elements](#elements)
- [Layout](#layout)
- [Logo](#logo)
- [Notes](#notes)

---
## Colors

<div class="row" style="margin-bottom: 1em;">
  <div class="col col-4" style="margin-bottom: 1em;">
    <div class="bg-blue" style="padding-top: 50%;"></div>
    <code>blue</code>
  </div>
  <div class="col col-4" style="margin-bottom: 1em;">
    <div class="bg-link-blue" style="padding-top: 50%;"></div>
    <code>link-blue</code>
  </div>
  <div class="col col-4" style="margin-bottom: 1em;">
    <div class="bg-dark-blue" style="padding-top: 50%;"></div>
    <code>dark-blue</code>
  </div>
  <div class="col col-4" style="margin-bottom: 1em;">
    <div class="bg-dark-blue-faded" style="padding-top: 50%;"></div>
    <code>dark-blue-faded</code>
  </div>
  <div class="col col-4" style="margin-bottom: 1em;">
    <div class="bg-dark-blue-xfaded" style="padding-top: 50%;"></div>
    <code>dark-blue-xfaded</code>
  </div>
  <div class="col col-4" style="margin-bottom: 1em;">
    <div class="bg-dark-blue-xxfaded" style="padding-top: 50%;"></div>
    <code>dark-blue-xxfaded</code>
  </div>
</div>

```
$blue:      #62A8E5;
$link-blue: #3E92DD;
$dark-blue: #002855;

$dark-blue-faded:   rgba($dark-blue, 0.6);
$dark-blue-xfaded:  rgba($dark-blue, 0.2);
$dark-blue-xxfaded: rgba($dark-blue, 0.05);

$white:     #fff;
```

---
## Typography

### Headings

Headings `<h1>` through `<h4>` are uppercase Benton Sans Compressed Black. Headings `<h5>` and `<h6>` are Benton Sans Regular.

<div class="style-example">
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
</div>

### Paragraphs

Body text inherits from the base font style, which is set in Benton Sans Regular. Links within body text are `$link-blue` color.

<div class="style-example">
<p>This is some paragraph text, with an inline <a>link</a>.</p>
</div>

### Lists

<div class="style-example">
<ul>
  <li>Unordered item</li>
  <li>Unordered item</li>
  <li>Unordered item</li>
</ul>
</div>

<div class="style-example">
<ol>
  <li>Ordered item</li>
  <li>Ordered item</li>
  <li>Ordered item</li>
</ol>
</div>

### Blockquotes

<div class="style-example">
<blockquote>If you want to call me an activist Attorney General, I will proudly accept that label.</blockquote>
</div>

### Inline elements

<div class="style-example">
<strong>Bold</strong>  
<em>Italic</em>  
<del>Strikethrough</del>  
<u>Underline</u>
</div>

### Small text

There is an additional smaller font size at 90% of the base font size, or `0.9em`, used for captions, footer text, small subtitles, etc. It is often `$dark-blue-faded`.

<div class="style-example">
<small>This is some small text.</small>
</div>

### Horizontal rules

Horizontal rules consist of two `2px` lines separated by `2px` of space. When on a white background, the foreground is `$dark-blue-xfaded`. When on a dark background, the foreground is `$white`.

<div class="style-example">
<hr>
</div>

---
## Elements

### Image cards

Image cards, used for Staff, Courses, and Events, have a set `min-height` at the different breakpoints. They come in large and small sizes, and fall back to a solid blue color if there is no image.

<div class="style-example">
<a class="card-link">
  <li class="card card--image card--large" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/holder-initiative/uploads/events-picnic.jpg');">
      <div class="card__tag">Event</div>
      <div class="card__text">
        <h2 class="card__title">Large Card with Image</h2>
        <h6 class="card__subtitle"><time>October 20, 2017</time></h6>
      </div>
  </li>
</a>
</div>

<div class="style-example">
<a class="card-link">
  <li class="card card--color card--small">
      <div class="card__tag">Course</div>
      <div class="card__text">
        <h2 class="card__title">Small Card with No Image</h2>
        <h6 class="card__subtitle"><time>Spring 2018</time></h6>
      </div>
  </li>
</a>
</div>

### Buttons

Buttons inherit `<h4>` font styles and have a fun arrow animation (check out `/assets/styles/_animations.scss`). The arrows assets can be found as SVGs in the source code at `/assets/images/`.

<div class="style-example no-bc">
<a class="button">This is a button</a>
</div>

---
## Layout

The website uses a responsive 12-column grid.

---
## Logo


---
## Notes

- Benton Sans Italic and Benton Sans Bold fonts are not included in this prototype, so faux fonts are rendered for <strong>bold</strong> and <em>italic</em>.

<small>Built by [Barrel](https://www.barrelny.com/) for CCIT.</small>

<script src="/holder-initiative/assets/scripts/style.js"></script>
