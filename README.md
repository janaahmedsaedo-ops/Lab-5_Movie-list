# Lab 5 - Movies Watch List (React)

A movies watch list app built with **React** for the CSE343 Web Development course. Save the movies you watch, give each one a star rating and a comment, and remove it when you want.

## Features

- Add a movie to the list
- Remove a movie from the list
- Write a comment review for each movie
- Give each movie a star rating from 1 to 5
- The rating is shown with star emojis, for example ⭐⭐⭐⭐ (4/5)
- A counter showing how many movies are in the list

## Project Structure

| File | Description |
|---|---|
| `index.html` | The single HTML page that React draws into |
| `src/main.jsx` | Entry file that renders the `App` component |
| `src/App.jsx` | The app: the `App` and `Movie` components |
| `src/App.css` | The styling |
| `package.json` | Project configuration and dependencies |

## React Concepts Used

- Components (`App` and `Movie`)
- JSX
- Props (passing `movie` and `onRemove` to `Movie`)
- State with `useState`
- Rendering lists with `map()` and `key`
- Conditional rendering with the ternary operator
- Event handling (`onClick`, `onChange`)

## How to Run

1. Install [Node.js](https://nodejs.org).
2. Download or clone this repository.
3. Open a terminal in the project folder and run:
   ```
   npm install
   npm run dev
   ```
4. Open the link printed in the terminal (usually `http://localhost:5173/`).

## Technologies Used

- React
- Vite
- JavaScript (JSX)
- CSS3

## Author

Jana Ahmed Saieed - ID: 24P0410
