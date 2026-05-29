const container = document.getElementById("movieContainer");
container.innerHTML = "";


function getMovieByGenre(genre) {
    container.innerHTML = "";

    let result = []
    for (const element of films) {
        if (element.genres.map(g => g.toLowerCase()).includes(genre)) {
            result.push(element)
        } else if (!genre) {
            result.push(element)
        }
    }


    result.forEach(movie => {
        container.innerHTML += `
            <div class="col-md-2">
            <a href="/BandarMovies/movie-detail/?id=${movie.id}" class="text-reset text-decoration-none"> 
              <div class="card">
                <img src="${movie.poster}" class="card-img-top">
                <div class="card-body text-center">
                  ${movie.title}
                </div>
              </div>
              </a>
           </div>
      `;
    })

    container.appendChild(container);
}



function showGenre(genre) {

    container.innerHTML += ``;

    let data = [];

    if (genre === "semua") {
        data = films;
    }
    // console.log(data);


    data.forEach(movie => {
        container.innerHTML += `
      <div class="col-md-2">
        <div class="card">
        <a href="/BandarMovies/movie-detail/?id=${movie.id}" class="text-reset text-decoration-none"> 
          <img src="${movie.poster}" class="card-img-top">
          <div class="card-body text-center underline-none">
            ${movie.title}
          </div>
          </a>
        </div>
      </div>
    `;
    });
}

// default tampil semua
showGenre("semua");


const buttons = document.querySelectorAll(".btn-dark");

buttons.forEach(btn => {
    btn.addEventListener("click", function (e) {

        // hapus active dari semua tombol
        buttons.forEach(b => b.classList.remove("active"));

        // tambahkan active ke tombol yang diklik
        this.classList.add("active");

    });
});

const modalElement = document.getElementById('myModal');


        const myModal = new bootstrap.Modal(modalElement);
        const btn = document.getElementById('myTriggerBtn');

        function show() {
            myModal.show();

            setTimeout(() => {
                hideModal()
            }, 1000)
        }

        function hideModal() {
            myModal.hide()
        }

        setTimeout(() => {
            if (!localStorage.getItem("loading")) {
                show()
            }
            localStorage.setItem("loading", true)
        }, 1000)

        

  const authBtn = document.getElementById("authBtn");

  // cek apakah user sudah login
  const username = localStorage.getItem("username");

  if (username) {

    // ubah tulisan tombol
    authBtn.innerHTML = "Sign Out";

    // ketika tombol diklik
    authBtn.addEventListener("click", function () {

      // hapus data login
      localStorage.removeItem("username");
      localStorage.removeItem("password");

      // kembali ke halaman login
      window.location.href = "/login";
    });

  } else {

    // kalau belum login
    authBtn.innerHTML = "Sign In";

    authBtn.addEventListener("click", function () {

      window.location.href = "/login";
    });

  }

