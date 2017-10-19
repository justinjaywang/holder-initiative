Prototype for the Eric H. Holder Initiative, built on Jekyll.

Viewable at [justinjaywang.github.io/holder-initiative/](https://justinjaywang.github.io/holder-initiative/) and hosted GitHub Pages.

## Introduction

### Styles

The source styles are in `/assets/styles/all.scss`, written in SCSS. Variables, such as colors, breakpoints, etc. are in `/assets/styles/_variables.css`.

### Scripts

The scripts are in `/assets/scripts/all.js`. The scripts are for:

1. Change fixed header style when scrolled down in the page.
1. Initialize the mobile navigation modal.
1. Initialize external links to open in new tab.

### Assets

- Assets for the site are in `/assets/images/`, and the SVG logos are in `/_includes/`.
- Assets that would be uploaded via CMS are in `/_uploads/`.

## Installation

Make sure you have [Jekyll](https://jekyllrb.com/) installed first.

## Local development

Install gems:
```
bundle install
```

Start the server and watch for changes:

```
bundle exec jekyll serve
```

The site is viewable at `localhost:4000`.
