const correctUsername = "admin";
const correctPassword = "12345";

// ambil tombol login
const loginButton = document.getElementById("loginBtn");

// event ketika tombol diklik
loginButton.addEventListener("click", function () {
  // ambil value input
  const usernameInput = document.getElementById("username").value;

  const passwordInput = document.getElementById("password").value;

  // cek input kosong
  if (usernameInput === "" || passwordInput === "") {
    alert("Semua field wajib diisi!");
  }

  // cek login benar
  else if (
    usernameInput === correctUsername &&
    passwordInput === correctPassword
  ) {
    alert("Login berhasil!");
  }

  // login gagal
  else {
    alert("Username atau password salah!");
  }
});
