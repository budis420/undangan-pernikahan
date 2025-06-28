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
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// Mulai musik dan sembunyikan teks animasi setelah interaksi pertama
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  const tapHint = document.getElementById("tap-to-play");

  function startMusic() {
    if (audio) {
      audio.muted = false;
      audio.play().catch(() => {}); // Catch agar tidak error
    }

    if (tapHint) {
      tapHint.style.display = "none";
    }

    document.removeEventListener("click", startMusic);
  }

  // Deteksi klik pertama pengguna
  document.addEventListener("click", startMusic);
});
