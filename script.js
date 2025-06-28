// Fungsi salin nomor rekening
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Nomor rekening berhasil disalin: " + text);
  }).catch(err => {
    alert("Gagal menyalin teks");
  });
}

// Mulai musik setelah interaksi pertama
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");

  // Mainkan musik setelah klik pertama kali
  function startMusic() {
    audio.play().catch(() => {});
    document.removeEventListener("click", startMusic);
  }

  document.addEventListener("click", startMusic);
});

// Toggle play/pause musik
function toggleMusic() {
  const audio = document.getElementById("bg-music");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
