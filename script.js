document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const layanan = document.getElementById("layanan").value;
  const pesan = document.getElementById("pesan").value;

  const nomorWA = "6281584266490";

  const teks =
    `Halo, perkenalkan saya ${nama}.%0A%0A` +
    `Tentang: ${layanan}%0A` +
    `Pesan: ${pesan || "-"}`;

  const url = `https://wa.me/${nomorWA}?text=${teks}`;

  window.open(url, "_blank");
});
