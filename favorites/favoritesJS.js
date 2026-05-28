// Database
const films = [
  {
    id: 1,
    title: "SUPERMAN",
    poster: "../gambar/action superman.jpg",
    genres: ["Action"],
    year: 2025,
    sinopsis:
      "The story of Superman journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent of Smallville, Kansas. He is the embodiment of truth, justice and the American way, guided by human kindness in a world that sees kindness as old-fashioned.",
    trailer: "Ox8ZLF6cGM0",
    likes: 0, // localstorage
    dislikes: 0, // localstorage
  },
  {
    id: 2,
    title: "BANG",
    poster: "../gambar/bangaction.jpg",
    genres: ["Action"],
    year: 2025,
    sinopsis:
      "Bang (Jack Kesy), one of the most feared hitmen, questions his violent life after a near-death experience. Seeing a future beyond bloodshed, he wants out—but his crime boss wont let go without a fight.",
    trailer: "x19tdyNa-QI",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 3,
    title: "AVATAR: FIRE AND ASH",
    poster: "../gambar/avataraction.jpg",
    genres: ["Action"],
    year: 2025,
    sinopsis:
      "Takes audiences back to Pandora in an immersive new adventure with Marine turned Na'vi leader Jake Sully (Worthington), Na'vi warrior Neytiri (Saldana) and the Sully family.",
    trailer: "nb_fFj_0rq8",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 4,
    title: "TRON: ARES",
    poster: "../gambar/tronaction.jpg",
    genres: ["Action"],
    year: 2025,
    sinopsis:
      "Said to focus on the emergence of a sentient program that crosses over into the human world that is not ready for contact.",
    trailer: "YShVEXb7-ic",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 5,
    title: "ANACONDA",
    poster: "../gambar/anacondaaction.jpg",
    genres: ["Action"],
    year: 2025,
    sinopsis:
      "Doug (Jack Black) and Griff (Paul Rudd) have been best friends since they were kids, and have always dreamed of remaking their all-time favorite movie: the cinematic classic Anaconda. When a midlife crisis pushes them to finally go for it, they head deep into the Amazon to start filming. But things get real when an actual giant anaconda appears, turning their comically chaotic movie set into a deadly situation.",
    trailer: "az8M5Mai0X4",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 6,
    title: "TOY STORY 5",
    poster: "../gambar/toystory5comedy.jpg",
    genres: ["Comedy"],
    year: 2025,
    sinopsis:
      "The toys are back and this time, Buzz Lightyear, Woody, Jessie and the rest of the gang's jobs are challenged when they come face-to-face with Lilypad, a brand-new tablet device that arrives with her own disruptive ideas about what is best for their kid, Bonnie. Will playtime ever be the same?",
    trailer: "c51ND9Hdbw0",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 7,
    title: "GHOSTBUSTER",
    poster: "../gambar/ghostbustercomedy.jpg",
    genres: ["Comedy"],
    year: 1984,
    sinopsis:
      "After the members of a team of scientists lose their cushy positions at a university in New York City, they decide to become ghostbusters to wage a high-tech battle with the supernatural for money. They stumble upon a gateway to another dimension, a doorway that will release evil upon the city.",
    trailer: "wQAljlSmjC8",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 8,
    title: "CRAZY RICH ASIANS",
    poster: "../gambar/crazyrichasiancomedy.jpg",
    genres: ["Comedy"],
    year: 2018,
    sinopsis:
      "Rachel Chu is happy to accompany her longtime boyfriend, Nick, to his best friend's wedding in Singapore. She's also surprised to learn that Nick's family is extremely wealthy, and he's considered one of the country's most eligible bachelors. Thrust into the spotlight, Rachel must now contend with jealous socialites, quirky relatives and something far, far worse -- Nick's disapproving mother.",
    trailer: "ZQ-YX-5bAs0",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 9,
    title: "KUNGFU HUSTLE",
    poster: "../gambar/kungfuhustlecomedy.jpg",
    genres: ["Comedy"],
    year: 2004,
    sinopsis:
      "When the hapless Sing and his dim-witted pal Bone try to scam the residents of Pig Sty Alley into thinking they're members of the dreaded Axe Gang, the real gangsters descend on this Shanghai slum to restore their fearsome reputation.",
    trailer: "FtE9-o6dBEI",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 10,
    title: "21 JUMP STREET",
    poster: "../gambar/21jumpstreetcomedy.jpg",
    genres: ["Comedy"],
    year: 2012,
    sinopsis:
      "When cops Schmidt and Jenko join the secret Jump Street unit, they use their youthful appearances to go undercover as high-school students. They trade in their guns and badges for backpacks, and set out to shut down a dangerous drug ring.",
    trailer: "Oj55KinxZx4",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 11,
    title: "SINNERS",
    poster: "../gambar/Sinnershorror.jpg",
    genres: ["Horror"],
    year: 2025,
    sinopsis:
      "Trying to leave their troubled lives behind, twin brothers (Michael B. Jordan) return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back.",
    trailer: "bKGxHflevuk",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 12,
    title: "A QUIET PLACE",
    poster: "../gambar/aquietplacehorror.jpg",
    genres: ["Horror"],
    year: 2018,
    sinopsis:
      "If they hear you, they hunt you. A family must live in silence to avoid mysterious creatures that hunt by sound. Knowing that even the slightest whisper or footstep can bring death, Evelyn and Lee are determined to find a way to protect their children while desperately searching for a way to fight back.",
    trailer: "nb_fFj_0rq8",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 13,
    title: "THE CURSE OF LA LLORONA",
    poster: "../gambar/TheCurseofLaLlorona.jpg",
    genres: ["Horror"],
    year: 2019,
    sinopsis:
      "Alma is murdered with her children during a military attack in Guatemala, but when the general who ordered the genocide is found not guilty 30 years later, Alma returns to the world of the living to torment the man.",
    trailer: "uOV-xMYQ7sk",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 14,
    title: "TRAIN TO BUSAN",
    poster: "../gambar/traintobusanhorror.jpg",
    genres: ["Horror"],
    year: 2016,
    sinopsis:
      "A man (Gong Yoo), his estranged daughter and other passengers become trapped on a speeding train during a zombie outbreak in South Korea.",
    trailer: "1ovgxN2VWNc",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 15,
    title: "WEAPONS",
    poster: "../gambar/weaponshorror.jpg",
    genres: ["Horror"],
    year: 2025,
    sinopsis:
      "When all but one child from the same class mysteriously vanish on the same night at exactly the same time, a community is left questioning who or what is behind their disappearance.",
    trailer: "OpThntO9ixc",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 16,
    title: "THE BALLAD OF WALLIS ISLAND",
    poster: "../gambar/theballadofwallisislandromance.jpg",
    genres: ["Romance"],
    year: 2025,
    sinopsis:
      "THE BALLAD OF WALLIS ISLAND follows Charles, an eccentric lottery winner who lives alone on a remote island and dreams of getting his favorite musicians back together. Old tensions resurface as Charles tries desperately to salvage his dream gig.",
    trailer: "HTi-e20yVNs",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 17,
    title: "MUSICA",
    poster: "../gambar/musicaromance.jpg",
    genres: ["Romance"],
    year: 2024,
    sinopsis:
      "Based on writer, director and star Rudy Mancuso, Musica is a coming-of-age love story that follows an aspiring creator with synesthesia, who must come to terms with an uncertain future, while navigating the pressures of love, family and his Brazilian culture in Newark, New Jersey.",
    trailer: "VckVviJh8ho",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 18,
    title: "THE BEAST",
    poster: "../gambar/beastromance.jpg",
    genres: ["Romance"],
    year: 2023,
    sinopsis:
      "The year is 2044: artificial intelligence controls all facets of a stoic society as humans routinely erase their feelings. Hoping to eliminate pain caused by their past-life romances, Gabrielle continually falls in love with different incarnations of Louis across multiple time periods.",
    trailer: "53ZebMn7QgA",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 19,
    title: "THE IDEA OF YOU",
    poster: "../gambar/theideaofyouromance.jpg",
    genres: ["Romance"],
    year: 2024,
    sinopsis:
      "The Idea of You centers on Solene (Anne Hathaway), a 40-year-old single mom who begins an unexpected romance with 24-year-old Hayes Campbell (Nicholas Galitzine), the lead singer of August Moon, the hottest boy band on the planet.",
    trailer: "V8i6PB0gGOA",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 20,
    title: "BABY GIRL",
    poster: "../gambar/babygirlromance.jpg",
    genres: ["Romance"],
    year: 2024,
    sinopsis:
      "A high-powered CEO puts her career and family on the line when she begins a torrid affair with her much younger intern.",
    trailer: "8Sx6U6Ou0Q",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 21,
    title: "THE ENDLESS",
    poster: "../gambar/theendlesssci-fi.jpg",
    genres: ["Sci-Fi"],
    year: 2017,
    sinopsis:
      "Two brothers receive a cryptic video message inspiring them to revisit the UFO death cult they escaped a decade earlier. As the members prepare for the coming of a mysterious event, the brothers race to unravel the seemingly impossible truth before their lives become permanently entangled with the cult.",
    trailer: "qMHpWCN0byw",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 22,
    title: "AD ASTRA",
    poster: "../gambar/adastrasci-fi.jpg",
    genres: ["Sci-Fi"],
    year: 2019,
    sinopsis:
      "Thirty years ago, Clifford McBride led a voyage into deep space, but the ship and crew were never heard from again. Now his son must embark on a daring mission to Neptune to uncover the truth about his missing father and a mysterious power surge that threatens the stability of the universe.",
    trailer: "P6AaSMfXHbA",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 23,
    title: "ALITA: BATTLE ANGEL",
    poster: "../gambar/alitabattleangel.jpg",
    genres: ["Sci-Fi"],
    year: 2019,
    sinopsis:
      "Set several centuries in the future, the abandoned Alita is found in the scrapyard of Iron City by Ido, a compassionate cyber-doctor. When Alita awakens, she has no memory of who she is. As Alita learns to navigate her new life and the treacherous streets of Iron City, Ido tries to shield her from her mysterious past.",
    trailer: "w7pYhpJaJW8",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 24,
    title: "READY PLAYER ONE",
    poster: "../gambar/readyplayeronesci-fi.jpg",
    genres: ["Sci-Fi"],
    year: 2018,
    sinopsis:
      "In 2045, the creator of a virtual reality universe promises his fortune to the first person to discover a digital Easter egg. Soon, young Wade Watts finds himself in a reality-bending treasure hunt through the mysterious and fantastical world.",
    trailer: "cSp1dM2Vj48",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 25,
    title: "SHIN GODZILLA",
    poster: "../gambar/shingodzillasci-fi.jpg",
    genres: ["Sci-Fi"],
    year: 2016,
    sinopsis:
      "Something has surfaced in Tokyo Bay. A horrific creature of tremendous size makes landfall in the city. Then it evolves. The government assembles a task force to combat the monster when an envoy delivers classified documents with one word on the cover: GODZILLA.",
    trailer: "3qX1ZU3jcfU",
    likes: 0,
    dislikes: 0,
  },
];

// Get Id
function getFilmFromURL() {
  let params = new URLSearchParams(window.location.search);
  let id = parseInt(params.get("id"));

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
renderFilm(getFilmFromURL());
