import {
  img_jpBundesLiga,
  img_jpLaLiga,
  img_jpPremierLeague,
  img_jpSerieA,
  img_jpChelseaDepan,
  img_jpChelseaBelakang,
  img_jpDortmundDepan,
  img_jpDortmundBelakang,
  img_jpJuveDepan,
  img_jpJuveBelakang,
  img_jpLeicesterDepan,
  img_jpLeicesterBelakang,
  img_jpLiverpoolDepan,
  img_jpLiverpoolBelakang,
  img_jpMadridDepan,
  img_jpMadridBelakang,
  img_jpMilanDepan,
  img_jpMilanBelakang,
  img_jpMunchenDepan,
  img_jpMunchenBelakang, } from '../assets'

export const dummyJerseys = [
  {
    id: 1,
    nama: 'CHELSEA 3RD 2018-2019',
    gambar: [img_jpChelseaDepan.replace('app/', '~/'), img_jpChelseaBelakang.replace('app/', '~/')],
    liga: {
      id: 2,
      nama: 'Premier League',
      gambar: img_jpPremierLeague.replace('app/', '~/'),
    },
    harga: 125000,
    berat: 0.25,
    jenis: 'Replika Top Quality',
    ukuran: ["S", "M", "L", "XL", "XXL"],
    ready: true
  },
  {
    id: 2,
    nama: 'DORTMUND AWAY 2018-2019',
    gambar: [img_jpDortmundDepan.replace('app/', '~/'), img_jpDortmundBelakang.replace('app/', '~/')],
    liga: {
      id: 4,
      nama: 'Bundesliga',
      gambar: img_jpBundesLiga.replace('app/', '~/'),
    },
    harga: 125000,
    berat: 0.25,
    jenis: 'Replika Top Quality',
    ukuran: ["S", "M", "L", "XL", "XXL"],
    ready: true
  },
  {
    id: 3,
    nama: 'JUVENTUS AWAY 2018-2019',
    gambar: [img_jpJuveDepan.replace('app/', '~/'), img_jpJuveBelakang.replace('app/', '~/')],
    liga: {
      id: 3,
      nama: 'Serie A',
      gambar: img_jpSerieA.replace('app/', '~/'),
    },
    harga: 125000,
    berat: 0.25,
    jenis: 'Replika Top Quality',
    ukuran: ["S", "M", "L", "XL", "XXL"],
    ready: true
  },
  {
    id: 4,
    nama: 'LEICESTER CITY HOME 2018-2019',
    gambar: [img_jpLeicesterDepan.replace('app/', '~/'), img_jpLeicesterBelakang.replace('app/', '~/')],
    liga: {
      id: 2,
      nama: 'Premier League',
      gambar: img_jpPremierLeague.replace('app/', '~/'),
    },
    harga: 125000,
    berat: 0.25,
    jenis: 'Replika Top Quality',
    ukuran: ["S", "M", "L", "XL", "XXL"],
    ready: true
  },
  {
    id: 5,
    nama: 'LIVERPOOL AWAY 2018-2019',
    gambar: [img_jpLiverpoolDepan.replace('app/', '~/'), img_jpLiverpoolBelakang.replace('app/', '~/')],
    liga: {
      id: 2,
      nama: 'Premier League',
      gambar: img_jpPremierLeague.replace('app/', '~/'),
    },
    harga: 125000,
    berat: 0.25,
    jenis: 'Replika Top Quality',
    ukuran: ["S", "M", "L", "XL", "XXL"],
    ready: true
  },
  {
    id: 6,
    nama: 'REAL MADRID 3RD 2018-2019',
    gambar: [img_jpMadridDepan.replace('app/', '~/'), img_jpMadridBelakang.replace('app/', '~/')],
    liga: {
      id: 1,
      nama: 'La Liga',
      gambar: img_jpLaLiga.replace('app/', '~/'),
    },
    harga: 125000,
    berat: 0.25,
    jenis: 'Replika Top Quality',
    ukuran: ["S", "M", "L", "XL", "XXL"],
    ready: true
  },
  {
    id: 7,
    nama: 'AC MILAN HOME 2018 2019',
    gambar: [img_jpMilanDepan.replace('app/', '~/'), img_jpMilanBelakang.replace('app/', '~/')],
    liga: {
      id: 3,
      nama: 'Serie A',
      gambar: img_jpSerieA.replace('app/', '~/'),
    },
    harga: 125000,
    berat: 0.25,
    jenis: 'Replika Top Quality',
    ukuran: ["S", "M", "L", "XL", "XXL"],
    ready: true
  },
  {
    id: 8,
    nama: 'BAYERN MUNCHEN 3RD 2018 2019',
    gambar: [img_jpMunchenDepan.replace('app/', '~/'), img_jpMunchenBelakang.replace('app/', '~/')],
    liga: {
      id: 4,
      nama: 'Bundesliga',
      gambar: img_jpBundesLiga.replace('app/', '~/'),
    },
    harga: 125000,
    berat: 0.25,
    jenis: 'Replika Top Quality',
    ukuran: ["S", "M", "L", "XL", "XXL"],
    ready: true
  }
]