Prototype for the Eric H. Holder Initiative.

Hosted on GitHub Pages and viewable [here](https://justinjaywang.github.io/holder-initiative/).

## Introduction

The prototype is built on [Jekyll](https://jekyllrb.com/), which compiles Liquid templates in `/_layouts/` and `/_includes/` and generates a static HTML site in `/_site/`.

### Styles

Source styles are written in SCSS and can be found in `/assets/styles/`.

- `all.scss`: compilation of all style
- `_variables.css`: variables, such as colors, breakpoints, etc.

Jekyll compiles CSS in `/_site/assets/styles/all.css`.

### Scripts

Source scripts are in `/assets/scripts/all.js`. The scripts are used to:

1. Change fixed header style when scrolled down in the page.
1. Initialize the mobile navigation modal.
1. Initialize external links to open in new tab.

Jekyll transfers JS in `/_site/assets/scripts/all.js`.

### Assets

- Assets for the site are in `/assets/images/`, and the SVG logos are in `/_includes/`.
- Assets that would be uploaded via CMS are in `/_uploads/`.

## Installation

Make sure you have [Jekyll](https://jekyllrb.com/) installed.

## Local development

Install gems:
```
bundle install
```

Start the server and watch for changes:

```
bundle exec jekyll serve
```

The local site is viewable at `localhost:4000/holder-initiative/`.
