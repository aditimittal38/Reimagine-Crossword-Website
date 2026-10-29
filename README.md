# Reimagine Crossword Website

A group project created for the Sheryians Hackathon 2024, organized by Sheryians Coding School. It reimagines the popular Crossword bookstore website, crossword.in, with a more interactive and playful storefront UI. Built with HTML, CSS, and JavaScript.

**Live site:** [Reimagine Crossword](https://aditimittal38.github.io/Reimagine-Crossword-Website/)

## Features

- Browse books by category, plus toys, games, stationery, and gifts
- Explore bestseller and new-arrival sections
- Navigate categories and view promotional slides
- Use the storefront's search, account, wishlist, and cart panels
- View author and reader-review sections

## Run Locally

From this directory, start a local static web server:

```bash
py -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000). No package installation or build step is required. The page also uses external CDN resources for some icons and UI scripts.

## Project Structure

```text
index.html       Main storefront page
assets/          Images, icons, fonts, and other media grouped by type
  authors/       Author and reader-review artwork
  backgrounds/   Section backgrounds and bookcase artwork
  banners/       Promotional graphics
  books/         Book cover images
  branding/      Crossword logos
  fonts/         Font files
  games/         Game images
  gifts/         Gift images
  icons/         UI and social icons
  stationery/    Stationery images
  toys/          Toy images
css/             Page stylesheets
js/              Navigation, filtering, and carousel scripts
```
