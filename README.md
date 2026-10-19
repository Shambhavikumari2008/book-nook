# Book Nook: A Simple Book Collection Website

Mission 2: Design a Simple Website.

**Live website:** https://shambhavikumari2008.github.io/book-nook/

**Repository:** https://github.com/Shambhavikumari2008/book-nook

## Project Overview

Book Nook is a one-page website that shows a small book collection with a short note on each book. Visitors can filter the books by type and mark the ones they have read.

**Target audience:** students and casual readers looking for something good to read next.

## Features

- Responsive layout that works on desktop and mobile screens
- Navigation bar that turns into a menu button on small screens
- Carousel of featured books with Previous/Next buttons, dots and auto-play (it pauses on hover and when a control has focus)
- Filter buttons (All, Fiction, Classics, Non-fiction) for the book cards
- "Mark as read" buttons that update a "Read" counter in the header
- Reading tips in expandable sections
- Keyboard-friendly focus outlines and reduced-motion support

## Technology Stack

- HTML5
- CSS3 (Flexbox, Grid, CSS variables, media queries)
- JavaScript (vanilla, no libraries)
- Google Fonts (Bricolage Grotesque and Public Sans)
- GitHub Pages for hosting

## Setup Instructions

1. Download or clone this repository:
   ```bash
   git clone <your-repo-link>
   cd <your-repo-folder>
   ```
2. Open `index.html` in any web browser. No installation or build step is needed.
3. Optional: in VS Code, install the **Live Server** extension, right-click `index.html` and choose **Open with Live Server**.

## Deployment (GitHub Pages)

1. In your repository, open **Settings > Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**, then click **Save**.
4. After a minute the live link appears at the top of that page, in the form `https://<your-username>.github.io/<repo-name>/`.

## Customising

- Change the books and text directly in `index.html`. Use books you have actually read.
- The cover areas use CSS gradients. To use real covers, add images to an `images/` folder and replace a gradient in `style.css` with `background: url("images/hobbit.jpg") center / cover;`.

## Project Structure

```
index.html   # page content
style.css    # design and responsive layout
script.js    # menu, carousel, filters and read buttons
README.md    # this file
```
