// OMDb API key created using a temporary email (testing purpose only).
// If it stops working, generate a new one with a valid email.
const apiKey = "788b9c92";

// ==== Клас для API ====
class MovieService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://www.omdbapi.com/";
  }

  async search(title, page = 1) {
    const res = await fetch(`${this.baseUrl}?apikey=${this.apiKey}&s=${encodeURIComponent(title)}&page=${page}`);
    return await res.json();
  }

  async getMovie(id) {
    const res = await fetch(`${this.baseUrl}?apikey=${this.apiKey}&i=${id}&plot=full`);
    return await res.json();
  }
}

// ==== UI логіка ====
const movieService = new MovieService(apiKey);
let currentQuery = "";
let currentPage = 1;
let totalResults = 0;

const moviesContainer = document.getElementById("movies");
const detailsContainer = document.getElementById("details");
const moreBtn = document.getElementById("moreBtn");

// Показати/сховати loader
function showLoader(target) { target.innerHTML = `<div class="loader">Loading...</div>`; }
function hideLoader(target) { target.innerHTML = ""; }

// Відображення фільмів
function renderMovies(movies, append = false) {
  if (!append) moviesContainer.innerHTML = "";
  movies.forEach(movie => {
    const div = document.createElement("div");
    div.className = "movie";
    div.innerHTML = `
      <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/180x250"}" alt="Poster">
      <strong>${movie.Title}</strong>
      <span>(${movie.Year})</span>
      <button class="details-btn" data-id="${movie.imdbID}">Details</button>
    `;
    moviesContainer.appendChild(div);
  });

  document.querySelectorAll(".details-btn").forEach(btn => {
    btn.addEventListener("click", e => openDetails(e.target.dataset.id));
  });
}

// Оновлення кнопки More
function updateMoreButton() {
  const totalPages = Math.ceil(totalResults / 10);
  if (currentPage < totalPages) moreBtn.style.display = "block";
  else moreBtn.style.display = "none";
}

// ==== Search ====
document.getElementById("searchBtn").addEventListener("click", async () => {
  currentQuery = document.getElementById("searchInput").value.trim();
  if (!currentQuery) return;

  currentPage = 1;
  showLoader(moviesContainer);

  const data = await movieService.search(currentQuery, currentPage);
  hideLoader(moviesContainer);

  if (data.Response === "True") {
    totalResults = data.totalResults;
    renderMovies(data.Search);
    updateMoreButton();
  } else {
    moviesContainer.innerHTML = `<p>${data.Error}</p>`;
    moreBtn.style.display = "none";
  }
});

// ==== More ====
moreBtn.addEventListener("click", async () => {
  currentPage++;
  moreBtn.disabled = true;
  moreBtn.textContent = "Loading...";

  const data = await movieService.search(currentQuery, currentPage);
  if (data.Response === "True") renderMovies(data.Search, true);

  moreBtn.disabled = false;
  moreBtn.textContent = "More";
  updateMoreButton();
});

// ==== Details Modal ====
async function openDetails(id) {
  detailsContainer.innerHTML = `
    <div class="modal" id="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <div id="modal-body"><div class="loader">Loading...</div></div>
      </div>
    </div>
  `;

  const modal = document.getElementById("modal");
  modal.style.display = "block";

  modal.querySelector(".close").onclick = () => modal.style.display = "none";
  window.onclick = e => { if(e.target === modal) modal.style.display = "none"; }

  const movie = await movieService.getMovie(id);
  if(movie.Response === "True") {
    document.getElementById("modal-body").innerHTML = `
      <h2>${movie.Title} (${movie.Year})</h2>
      <p><strong>Genre:</strong> ${movie.Genre}</p>
      <p><strong>Director:</strong> ${movie.Director}</p>
      <p><strong>Actors:</strong> ${movie.Actors}</p>
      <p><strong>Plot:</strong> ${movie.Plot}</p>
      ${movie.Poster !== "N/A" ? `<img src="${movie.Poster}" alt="Poster">` : ""}
    `;
  } else {
    document.getElementById("modal-body").innerHTML = `<p>${movie.Error}</p>`;
  }
}
