Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      header: {
        title: "Niluh Sekar",
        description: "Berasal dari Prambanan, Klaten dan pernah bersekolah di SMP N 1 Prambanan, SMA N 1 Jogonalan, dan sedang berkuliah di Universitas Ahmad Dahlan ",
        social: {
          ig: {
            url: "https://instagram.com/niluhskrlfa_",
            title: "niluhskrlfa_",
          },
        },
        imageProfile: "Image/niluh.png",
      },
      articles: {
        title: "SMP N 1 PRAMBANAN",
        description:
          "Yang beralamat di Jalan Raya Solo-YogyaKlaten, Tegalsanggrahan, Sanggrahan, Kec. Prambanan, Kabupaten Klaten, Jawa Tengah 57454. Terdapat 22 Ruang kelas, 1 Laboratorium, 1 Perpustakaan, dan jumlah guru ada 41. Menerapkan Kurikulum 2013.",
        thumbnail: "Image/SMP.jpeg",
      },
      articles2: {
        title: "SMA N 1 JOGONALAN",
        description:
          "Yang beralamat di Jl. Raya Jogja-Klaten KM.7/23 Prawatan, Jogonalan, Klaten JAWA TENGAH, Indonesia 57452. SMA Negeri 1 Jogonalan berdiri dan mulai melaksanakan kegiatan pembelajaran pada tahun 1990, dimulai dengan Tahun Pembelajaran 1990/1991 dengan 3 kelas paralel kelas 1 (sekarang kelas X).",
        thumbnail: "Image/SMA.jpg",
      },
      articles3: {
        title: "UNIVERSITAS AHMAD DAHLAN",
        description:
          "Yang beralamat di Jl. Ringroad Selatan, Kragilan, Tamanan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55191. Universitas Ahmad Dahlan (UAD) adalah perguruan tinggi yang ada di Provinsi Daerah Istimewa Yogyakarta. Pendirian UAD merupakan pengembangan dari Institut Keguruan dan Ilmu Pendidikan (IKIP) Muhammadiyah Yogyakarta.",
        thumbnail: "Image/UAD.png",
      },
    };
  },
}).mount("#app");
