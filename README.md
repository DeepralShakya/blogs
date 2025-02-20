# Next.js Blog Project

A simple and efficient Next.js blog application that supports pagination, search (with debounce), and dynamic blog posts.

## Features

- Real-time search with debounce for better performance.
- Pagination for browsing multiple posts.
- Dynamic routes for individual blog posts.
- Styled with Tailwind CSS.

## Installation & Setup

### Clone the Repository
```sh
git clone https://github.com/DeepralShakya/blogs.git
cd blog
```

### Install Dependencies
```sh
npm install  # or yarn install
```

### Run the Development Server
```sh
npm run dev  # or yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
nextjs-blog/
│-- app/
│   ├── page.js  # Main Blog Page
│   ├── [slug]/page.js  # Individual Blog Post
│-- components/
│   ├── ui/  # shadcn Component
│   ├── SkeletonCard.js  # Skeleton Loader
│-- data/
│   ├── data.js  # Static blog data
│-- public/
│-- styles/
│-- package.json
```

## Dependencies

This project uses the following dependencies:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lodash](https://lodash.com/) - Utility functions (debounce used for search optimization)

