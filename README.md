# ChefBread 🍞

A full-stack bakery management web app built with Node.js and Express. Manage bakers and their bread offerings with full CRUD operations.

## Features

- Add, view, edit, and delete bakers
- Add, view, edit, and delete bread entries per baker
- Server-side rendered JSX views
- RESTful routing with Express

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Views:** JSX (server-side rendering)
- **Styling:** CSS

## Project Structure

```
├── controllers/
│   ├── bakers_controller.js
│   └── breads_controller.js
├── models/
│   ├── baker.js
│   └── bread.js
├── views/
│   ├── index.jsx
│   ├── show.jsx
│   ├── new.jsx
│   └── edit.jsx
└── server.js
```

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
