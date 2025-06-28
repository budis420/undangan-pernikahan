// Fungsi salin nomor rekening
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Nomor rekening berhasil disalin: " + text);
  }).catch(err => {
    alert("Gagal menyalin teks");
  });
}

// Toggle play/pause musik
function toggleMusic() {
  const audio = document.getElementById("bg-music");
  const musicIcon = document.getElementById("music-icon");

  if (audio.paused) {
    audio.play();
    audio.muted = false;
    musicIcon.classList.add("putar");
  } else {
    audio.pause();
    musicIcon.classList.remove("putar");
  }
}

// Mulai musik dan sembunyikan teks animasi setelah interaksi pertama
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  const tapHint = document.getElementById("tap-to-play");
  const musicIcon = document.getElementById("music-icon");

  function startMusic() {
    if (audio) {
      audio.muted = false;
      audio.play().then(() => {
        if (musicIcon) musicIcon.classList.add("putar");
      }).catch(() => {});
    }

    if (tapHint) {
      tapHint.style.display = "none";
    }

    document.removeEventListener("click", startMusic);
  }

  // Deteksi klik pertama pengguna
  document.addEventListener("click", startMusic);
});