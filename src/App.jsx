import { useState } from "react";
import "./App.css";

function Movie({ movie, onRemove }) {
  return (
    <div className="movie-card">
      <div className="movie-title">{movie.title}</div>

      <div className="stars">
        {"⭐".repeat(movie.rating)} ({movie.rating}/5)
      </div>

      {movie.comment !== "" ? (
        <div className="comment">{movie.comment}</div>
      ) : (
        <div className="comment">No comment</div>
      )}

      <button className="remove-btn" onClick={() => onRemove(movie.id)}>
        Remove
      </button>
    </div>
  );
}

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(3);
  const [comment, setComment] = useState("");

  function handleAdd() {
    if (title.trim() === "") {
      return;
    }
    const newMovie = {
      id: Date.now(),
      title: title,
      rating: rating,
      comment: comment,
    };
    setMovies([...movies, newMovie]);
    setTitle("");
    setRating(3);
    setComment("");
  }

  function handleRemove(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  return (
    <div className="app">
      <h1>Movies Watch List</h1>

      <div className="add-form">
        <input
          placeholder="Movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          <option value="1">⭐ 1</option>
          <option value="2">⭐⭐ 2</option>
          <option value="3">⭐⭐⭐ 3</option>
          <option value="4">⭐⭐⭐⭐ 4</option>
          <option value="5">⭐⭐⭐⭐⭐ 5</option>
        </select>
        <input
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleAdd}>Add Movie</button>
      </div>

      <h2>My Movies ({movies.length})</h2>

      {movies.length === 0 ? (
        <p className="empty">No movies yet. Add your first one!</p>
      ) : (
        movies.map((movie) => (
          <Movie key={movie.id} movie={movie} onRemove={handleRemove} />
        ))
      )}
    </div>
  );
}

export default App;