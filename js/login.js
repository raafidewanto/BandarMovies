const form = document.getElementById("style2");

form.addEventListener("submit", function (event) {

  // mencegah reload form
  event.preventDefault();

  // ambil value input
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // validasi sederhana
  if (username === "" || password === "") {
    alert("Username dan password wajib diisi!");
    return;
  }

  // simpan ke local storage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  // pindah halaman
  window.location.href = "/index.html";
});