// Get Id
function getFilmFromURL() {
  let params = new URLSearchParams(window.location.search);
  let id = parseInt(params.get("id"));
  // console.log(id); -> check id
  let found = null;
  for (let i = 0; i < films.length; i++) {
    if (films[i].id === id) {
      found = films[i];
      break;
    }
  }

  if (found !== null) {
    return found;
  } else {
    return films[0];
  }
}

// Logic
function calcLikePercent(film) {
  let total = film.likes + film.dislikes;

  if (total === 0) {
    return 0;
  } else {
    let percent = (film.likes / total) * 100;
    return Math.round(percent);
  }
}

// Render
function renderFilm(film) {
  // Poster
  const posterImg = document.getElementById("filmPoster");
  const posterFallback = document.getElementById("posterFallback");

  if (film.poster) {
    posterImg.src = film.poster;
    posterImg.alt = film.title;
    posterImg.style.display = "block";
    posterFallback.style.display = "none";
    posterImg.onerror = () => {
      posterImg.style.display = "none";
      posterFallback.style.display = "flex";
    };
  } else {
    posterImg.style.display = "none";
    posterFallback.style.display = "flex";
  }

  // Judul & tahun
  document.getElementById("filmTitle").textContent = film.title;
  document.getElementById("filmYear").textContent = film.year;

  // Sinopsis
  document.getElementById("filmSinopsis").textContent = film.sinopsis;

  // Genre tags
  document.getElementById("filmGenreTags").innerHTML = film.genres
    .map((g) => `<span class="genre-tag">${g}</span>`)
    .join("");

  // Trailer
  document.getElementById("filmTrailer").src = film.trailer
    ? `https://www.youtube.com/embed/${film.trailer}`
    : "";

  // Rating
  activeFilm = film;
  renderRating(film);
}

function renderRating(film) {
  const pct = calcLikePercent(film);

  document.getElementById("ratingBar").style.width = pct + "%";
  document.getElementById("ratingPercent").textContent =
    `${pct}% viewers like this movie! (${film.likes} 👍 · ${film.dislikes} 👎)`;
  document.getElementById("likeCount").textContent = film.likes;
  document.getElementById("dislikeCount").textContent = film.dislikes;

  document.getElementById("btnLike").classList.remove("voted");
  document.getElementById("btnDislike").classList.remove("voted");
}

// vote
let activeFilm = null;

function saveVotes(film) {
  const votes = JSON.parse(localStorage.getItem("filmVotes") || "{}");
  votes[film.id] = { likes: film.likes, dislikes: film.dislikes };
  localStorage.setItem("filmVotes", JSON.stringify(votes));
}

function loadVotes() {
  const votes = JSON.parse(localStorage.getItem("filmVotes") || "{}");
  films.forEach((film) => {
    if (votes[film.id]) {
      film.likes = votes[film.id].likes;
      film.dislikes = votes[film.id].dislikes;
    }
  });
}

function vote(type) {
  if (!activeFilm) return;

  const btnLike = document.getElementById("btnLike");
  const btnDislike = document.getElementById("btnDislike");
  const alreadyLiked = btnLike.classList.contains("voted");
  const alreadyDisliked = btnDislike.classList.contains("voted");

  if (type === "like") {
    if (alreadyLiked) {
      activeFilm.likes--;
      btnLike.classList.remove("voted");
    } else {
      activeFilm.likes++;
      btnLike.classList.add("voted");
      if (alreadyDisliked) {
        activeFilm.dislikes--;
        btnDislike.classList.remove("voted");
      }
    }
  } else {
    if (alreadyDisliked) {
      activeFilm.dislikes--;
      btnDislike.classList.remove("voted");
    } else {
      activeFilm.dislikes++;
      btnDislike.classList.add("voted");
      if (alreadyLiked) {
        activeFilm.likes--;
        btnLike.classList.remove("voted");
      }
    }
  }
  saveVotes(activeFilm);
  renderRating(activeFilm);
}



// Event listener
document.getElementById("btnLike").onclick = function () {
  vote("like");
};

document.getElementById("btnDislike").onclick = function () {
  vote("dislike");
};


//Init
loadVotes();
renderFilm(getFilmFromURL());
