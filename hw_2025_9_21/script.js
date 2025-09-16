// OMDb API key created using a temporary email (testing purpose only).
// If it stops working, generate a new one with a valid email.
const apiKey = "788b9c92"; 
let currentQuery = "";
let currentPage = 1;
let currentGenre = "";

document.getElementById("searchBtn").addEventListener("click", () => {
  currentQuery = document.getElementById("searchInput").value.trim();
  currentGenre = document.getElementById("genreSelect").value;
  if (currentQuery) {
    fetchMovies(currentQuery, 1, currentGenre);
  }
});

async function fetchMovies(query, page, genre) {
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}&page=${page}`;
  const res = await fetch(url);
  const data = await res.json();

  if (data.Response === "True") {
    let movies = data.Search;

    // filter by genre if selected
    if (genre) {
      const detailedMovies = await Promise.all(
        movies.map(m => fetchMovieDetails(m.imdbID))
      );
      movies = detailedMovies.filter(m => m.Genre && m.Genre.includes(genre));
    }

    renderMovies(movies);
    renderPagination(data.totalResults, page);
    document.getElementById("details").innerHTML = "";
  } else {
    document.getElementById("movies").innerHTML = `<p>${data.Error}</p>`;
    document.getElementById("pagination").innerHTML = "";
  }
}

function renderMovies(movies) {
  const container = document.getElementById("movies");
  container.innerHTML = "";

  if (!movies || movies.length === 0) {
    container.innerHTML = "<p>No movies found for this genre.</p>";
    return;
  }

  movies.forEach(movie => {
    const div = document.createElement("div");
    div.className = "movie";
    div.innerHTML = `
      <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/180x250?text=No+Image"}" alt="Poster">
      <strong>${movie.Title}</strong>
      <span>(${movie.Year})</span>
      <button onclick="fetchDetails('${movie.imdbID}')">Details</button>
    `;
    container.appendChild(div);
  });
}

function renderPagination(totalResults, currentPage) {
  const totalPages = Math.ceil(totalResults / 10);
  const container = document.getElementById("pagination");
  container.innerHTML = "";

  if (totalPages <= 1) return;

  // Prev button
  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Prev";
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener("click", () => fetchMovies(currentQuery, currentPage - 1, currentGenre));
  container.appendChild(prevBtn);

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    if (i > 5 && i < totalPages - 1) {
      if (i === 6) {
        const dots = document.createElement("span");
        dots.textContent = "...";
        container.appendChild(dots);
      }
      continue;
    }
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.disabled = true;
    btn.addEventListener("click", () => fetchMovies(currentQuery, i, currentGenre));
    container.appendChild(btn);
  }

  // Next button
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.addEventListener("click", () => fetchMovies(currentQuery, currentPage + 1, currentGenre));
  container.appendChild(nextBtn);
}

async function fetchDetails(imdbID) {
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`;
  const res = await fetch(url);
  const movie = await res.json();

  if (movie.Response === "True") {
    document.getElementById("details").innerHTML = `
      <h2>${movie.Title} (${movie.Year})</h2>
      <p><strong>Genre:</strong> ${movie.Genre}</p>
      <p><strong>Director:</strong> ${movie.Director}</p>
      <p><strong>Actors:</strong> ${movie.Actors}</p>
      <p><strong>Plot:</strong> ${movie.Plot}</p>
      ${movie.Poster !== "N/A" ? `<img src="${movie.Poster}" alt="Poster">` : ""}
    `;
  }
}

async function fetchMovieDetails(imdbID) {
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;
  const res = await fetch(url);
  return await res.json();
}
